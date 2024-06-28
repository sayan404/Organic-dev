import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Hospital from "@/src/models/hospitalModel";
import dbConnect from "@/src/config/dbConfig";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const {
            name,
            address,
            state,
            city,
            district,
            street,
            pincode,
            typeOfHospital,
            estd,
            primaryMobileNo,
            secondaryMobileNo,
            primaryEmail,
            secondaryEmail,
            registeredFor,
            hospitalRegistrationNo,
            password,
        } = await req.json();

        // Check if a hospital with the same HRN or primary email already exists
        const existingHospital = await Hospital.findOne({
            $or: [{ hospitalRegistrationNo }, { primaryEmail }],
        });

        if (existingHospital) {
            return NextResponse.json(
                { message: "Hospital already exists" },
                { status: 400 }
            );
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new hospital
        const newHospital = new Hospital({
            name,
            address,
            state,
            city,
            district,
            street,
            pincode,
            typeOfHospital,
            estd,
            primaryMobileNo,
            secondaryMobileNo,
            primaryEmail,
            secondaryEmail,
            registeredFor,
            hospitalRegistrationNo,
            password: hashedPassword,
            requests: [],
        });

        // Save the new hospital to the database
        await newHospital.save();

        return NextResponse.json(
            {
                message: "Hospital registered successfully",
                hospital: newHospital,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.log(error);
        return NextResponse.json(
            { message: "Server error", error: error.message },
            { status: 500 }
        );
    }
}
