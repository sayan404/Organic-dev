import mongoose, { Document, Schema } from "mongoose";

interface IDonateRequest extends Document {
    donorId: mongoose.Types.ObjectId;
    hospitalId: mongoose.Types.ObjectId;
    organType: string;
    status: "Pending" | "Approved" | "Rejected" | "Donated";
    appointmentDate?: Date;
}

const donateRequestSchema: Schema = new Schema(
    {
        donorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Donor",
            required: true,
        },
        hospitalId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true,
        },
        organType: { type: String, required: true },
        status: {
            type: String,
            enum: ["Pending", "Approved", "Rejected", "Donated"],
            required: true,
        },
        appointmentDate: { type: Date },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IDonateRequest>(
    "DonateRequest",
    donateRequestSchema
);
