// pages/api/login.ts
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Hospital from "@/src/models/hospitalModel";
import dbConnect from "@/src/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();

    const { hospitalRegistrationNo, password } = await req.json();
    console.log(hospitalRegistrationNo, password);

    try {
        await dbConnect();

        const hospital = await Hospital.findOne({ hospitalRegistrationNo });
        if (!hospital) {
            return NextResponse.json(
                {
                    message: "Invalid hospitalRegistrationNo or password",
                },
                { status: 401 }
            );
        }

        // const isPasswordValid = await bcrypt.compare(
        //     password,
        //     hospital.password
        // );
        const isPasswordValid = password == hospital.password;
        if (!isPasswordValid) {
            return NextResponse.json(
                {
                    message: "Invalid hospitalRegistrationNo or password",
                },
                { status: 401 }
            );
        }

        const token = jwt.sign(
            { id: hospital._id, name: hospital.name },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        const response = NextResponse.json(
            {
                message: "Login successful",
                success: true,
            },
            { status: 200 }
        );
        response.cookies.set("token", token, {
            httpOnly: true,
        });
        return response;
    } catch (error: any) {
        console.log(error);
        NextResponse.json(
            { message: "Server error", error: error.message },
            { status: 500 }
        );
    }
}
