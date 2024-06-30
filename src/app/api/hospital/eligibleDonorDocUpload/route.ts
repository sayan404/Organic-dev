import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/src/config/dbConfig';
import EligibleDonorWithOrganDetail from '@/src/models/eligibleDonorWithOrganModel';
import { uploadFiles } from '@/src/lib/actions/upload-pdf.action';

export async function GET(req: NextRequest) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);
        const organType = searchParams.get('organType');

        if (!organType) {
            return NextResponse.json(
                { message: 'organType query parameter is required' },
                { status: 400 }
            );
        }

        const organsData = await EligibleDonorWithOrganDetail.find({ organType, availabilityStatus: 'Available' });
        console.log("organs to be searched", organsData);

        return NextResponse.json(
            { message: 'Organs retrieved successfully', data: organsData },
            { status: 200 }
        );
    } catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { message: 'Server error', error: error.message },
            { status: 500 }
        );
    }
}



export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const {
            donorType,
            nomineeName,
            nomineeContactNumber,
            donorId,
            donorName,
            hospitalId,
            organType,
            bloodType,
            organDescription,
            availabilityStatus,
            doctorName,
            doctorContact,
            doctorRegistrationNumber,
            checkupResults,
            checkupRelatedDocument,
        } = await req.json();
        const formData = req.body // have to be the form data
        console.log("donorType,nomineeName,nomineeContactNumber,donorId,donorName,hospitalId,organType,bloodType,organDescription,",
            donorType,
            nomineeName,
            nomineeContactNumber,
            donorId,
            donorName,
            hospitalId,
            organType,
            bloodType,
            organDescription,
            availabilityStatus,
            doctorName,
            doctorContact,
            doctorRegistrationNumber,
            checkupResults,
            checkupRelatedDocument);

        // Create a new eligible donor with organ detail entry
        const newEligibleDonorWithOrganDetail = new EligibleDonorWithOrganDetail({
            donorType,
            nomineeName,
            nomineeContactNumber,
            donorId,
            donorName,
            hospitalId,
            organType,
            bloodType,
            organDescription,
            availabilityStatus: "Available",
            doctorName,
            allTextOrganData: "No data yet",
            doctorContact,
            doctorRegistrationNumber,
            checkupResults,
            checkupRelatedDocument,
        });


        // Save the new entry to the database
        const newEligibleDonorWithOrganDetailReponseData = await newEligibleDonorWithOrganDetail.save();
        console.log("newEligibleDonorWithOrganDetailReponseData", newEligibleDonorWithOrganDetailReponseData);
        try {
            if (formData) {
                const fileTextData = await uploadFiles(formData, newEligibleDonorWithOrganDetailReponseData._id);
                newEligibleDonorWithOrganDetail.allTextOrganData = fileTextData;
                await newEligibleDonorWithOrganDetail.save();
            }
        }

        catch (error: any) {
            console.log("Failed to genretae text data from pdf file", error);

        }

        return NextResponse.json(
            {
                message: 'Eligible donor with organ details added successfully',
                data: newEligibleDonorWithOrganDetail,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { message: 'Server error', error: error.message },
            { status: 500 }
        );
    }
}

