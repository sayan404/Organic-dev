import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/src/config/dbConfig";
import organReceiverModal from "@/src/models/organReceiverModal";
import axios from "axios";
import { uploadFiles } from "@/src/lib/actions/upload-pdf.action";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const {
            hospitalId,
            hospitalMobileNo,
            hospitalEmailId,
            organType,
            patientName,
            severity,
            patientCity,
            patientDistrict,
            patientPincode,
            patientDOB,
            patientAge,
            patientGender,
            patientBloodGroup,
            patientMobileNo,
            patientEmailId,
            patientOrgan,
            patientOrganRelatedDoc,
            referredDoctorName,
            referredDoctorRegId,
            patientMedicalConditionExplanation,
            organAlotmentStatus
        } = await req.json();
        const formData = req.body // have to be the form data
        // Validate required fields
        // if (!hospitalId || !hospitalMobileNo || !hospitalEmailId || !organType || !patientDetailsName || !patientDetailsAge || !patientDetailsMedicalConditionExplanation || !severity || !patientCity || !patientDistrict || !patientPincode || !patientDOB || !patientAge || !patientGender || !patientBloodGroup || !patientMobileNo || !patientEmailId || !patientOrgan || !patientOrganRelatedDocs || !referredDoctorName || !referredDoctorRegId) {
        //     return NextResponse.json(
        //         { message: "All fields are required" },
        //         { status: 400 }
        //     );
        // }

        // Create a new organ request
        const newOrganRequest = new organReceiverModal({
            hospitalId,
            hospitalMobileNo,
            hospitalEmailId,
            organType,
            patientName,
            patientAge,
            patientMedicalConditionExplanation,
            severity,
            patientCity,
            patientDistrict,
            patientPincode,
            patientDOB,
            patientGender,
            patientBloodGroup,
            patientMobileNo,
            patientEmailId,
            patientOrgan,
            patientOrganRelatedDoc,
            allTextOrganData: "No data yet",
            referredDoctorName,
            referredDoctorRegId,
            organAlotmentStatus
        });

        // Save the new organ request to the database
        const savedNewOrganRequest = await newOrganRequest.save();
        if (!savedNewOrganRequest) {
            return NextResponse.json(
                { message: "Organ request not created" },
                { status: 500 }
            );
        }
        console.log("savedNewOrganRequest", savedNewOrganRequest);
        let textData = "";
        try {
            if (formData) {
                const fileTextData = await uploadFiles(formData, savedNewOrganRequest._id);
                savedNewOrganRequest.allTextOrganData = fileTextData;
                await savedNewOrganRequest.save();
                textData = fileTextData;
            }
        }

        catch (error: any) {
            console.log("Failed to genretae text data from pdf file", error);

        }
        const organToBeMatched = {
            organType,
            patientName,
            patientAge,
            patientMedicalConditionExplanation,
            severity,
            patientCity,
            patientDistrict,
            patientPincode,
            patientDOB,
            patientGender,
            patientBloodGroup,
            patientMobileNo,
            patientEmailId,
            patientOrgan,
            patientOrganRelatedDoc,
            patientOrganRelatedDocInText: textData,
            referredDoctorName,
            referredDoctorRegId,
            organAlotmentStatus
        }
        const message = "FROM_RECEIVER_TO_DONOR_ORGAN_MATCHER"
        const matchedOrganRequests = await axios.post("http://localhost:3000/api/matcher", { message, organType, organToBeMatched })
        if (matchedOrganRequests) {
            return NextResponse.json(
                {
                    message: "Got a match for the organ",
                    organRequest: matchedOrganRequests,
                },
                { status: 201 }
            );
        }
        else {
            return NextResponse.json(
                { message: 'No receiver found' },
                { status: 200 }
            );
        }
        // return NextResponse.json(
        //     {
        //         message: "Some error happened while matching the organ request, please try again later."
        //     },
        //     { status: 201 }
        // );

        //TODO: now instead of returning the response, we will put this record into the queue of the same organ type
    } catch (error: any) {
        console.log(error);
        return NextResponse.json(
            { message: "Server error", error: error.message },
            { status: 500 }
        );
    }
}
