import dbConnect from "@/src/config/dbConfig";
import Hospital from "@/src/models/hospitalModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await dbConnect();
        
        const hospitalId = req.nextUrl.searchParams.get("hospitalId");

        if(!hospitalId) {
            return NextResponse.json({ message: "Required Hospital Id" }, { status: 400 });
        }

        const hospital = await Hospital.findById(hospitalId).populate("requests");

        if (!hospital) {
            return NextResponse.json({ message: "Hospital Not Found" }, { status: 400 });
        }
        return NextResponse.json({ requests: hospital.requests }, { status: 200 });
        
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ message: "Server Gone Wrong" }, { status: 500 });
    }
}