import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/src/config/dbConfig';
import OrganReceiverRequest from '@/src/models/organReceiverModal';
import { uploadFiles } from '@/src/lib/actions/upload-pdf.action';

export async function GET(req: NextRequest) {
    // fpr matching the organ type
    // Ref is new onboarded Donor
    try {
        await dbConnect();
        const organType = req.nextUrl.searchParams.get("organType");

        if (!organType) {
            return NextResponse.json(
                { message: 'organType query parameter is required' },
                { status: 400 }
            );
        }

        const organsData = await OrganReceiverRequest.find({ organType });
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
