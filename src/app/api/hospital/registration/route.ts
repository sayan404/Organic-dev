import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Hospital from "@/src/models/hospitalModel";
import dbConnect from "@/src/config/dbConfig";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        const body = await req.json();
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
        } = body;

        
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
        console.log("hashedPassword - 0", hashedPassword);

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
            password,
            requests: [],
        });
        console.log("newHospital - 1", newHospital);

        // Save the new hospital to the database
        const data = await newHospital.save();
        console.log("data - 2", data);

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
