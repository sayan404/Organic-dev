import dbConnect from "@/src/config/dbConfig";
import Donor from "@/src/models/donorModel";
import hospitalModel from "@/src/models/hospitalModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const {
            name,
            parentName,
            currentResidentialAddress,
            address,
            state,
            city,
            district,
            street,
            pincode,
            dob,
            age,
            gender,
            bloodGroup,
            mobileNo,
            emailId,
            occupation,
            aadharNo,
            organs,
            hospitalId,
        } = await req.json();

        // Check if a donor with the same aadharNo or emailId already exists
        const existingDonor = await Donor.findOne({
            $or: [{ aadharNo }, { emailId }],
        });

        if (existingDonor) {
            return NextResponse.json(
                {
                    message:
                        "Donor with the same Aadhar number or email already exists",
                },
                { status: 400 }
            );
        }

        // Create a new donor
        const newDonor = new Donor({
            name,
            parentName,
            currentResidentialAddress,
            address,
            state,
            city,
            district,
            street,
            pincode,
            dob,
            age,
            gender,
            bloodGroup,
            mobileNo,
            emailId,
            occupation,
            aadharNo,
            organs,
        });

        // Save the new donor to the database
        await newDonor.save();

        await hospitalModel.findByIdAndUpdate(hospitalId, {
            $push: { requests: newDonor._id },
        });

        return NextResponse.json(
            { message: "Donor created successfully" },
            { status: 201 }
        );
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({
            message: "Server error",
            error: error.message,
        });
    }
}

export async function PATCH(req: NextRequest) {
    try {
        await dbConnect();

        const { donorId, status } = await req.json();
        await Donor.findByIdAndUpdate(donorId, { status });

        return NextResponse.json;
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({
            message: "Server error",
            error: error.message,
        });
    }
}
