import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/src/config/dbConfig";
import organReceiverModal from "@/src/models/organReceiverModal";

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
            patientOrganRelatedDocs,
            referredDoctorName,
            referredDoctorRegId,
            patientMedicalConditionExplanation,
            organAlotmentStatus
        } = await req.json();

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
            patientOrganRelatedDocs,
            referredDoctorName,
            referredDoctorRegId,
            organAlotmentStatus
        });

        // Save the new organ request to the database
        await newOrganRequest.save();

        return NextResponse.json(
            {
                message: "Organ request created successfully",
                organRequest: newOrganRequest,
            },
            { status: 201 }
        );
        //TODO: now instead of returning the response, we will put this record into the queue of the same organ type
    } catch (error: any) {
        console.log(error);
        return NextResponse.json(
            { message: "Server error", error: error.message },
            { status: 500 }
        );
    }
}
