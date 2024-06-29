import mongoose, { Document, Schema } from "mongoose";

interface IHospital extends Document {
    name: string;
    address: string;
    state: string;
    city: string;
    district: string;
    street: string;
    pincode: string;
    typeOfHospital: "govt" | "non govt" | "semi govt";
    estd: number;
    primaryMobileNo: string;
    secondaryMobileNo?: string;
    primaryEmail: string;
    secondaryEmail?: string;
    registeredFor: "Retrieval" | "Transplant" | "both";
    hospitalRegistrationNo: string;
    password: string;
    requests: mongoose.Types.ObjectId[];
}

const hospitalSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String, required: true },
        street: { type: String, required: true },
        pincode: { type: String, required: true },
        typeOfHospital: {
            type: String,
            enum: ["govt", "non govt", "semi govt"],
            required: true,
        },
        estd: { type: Number, required: true },
        primaryMobileNo: { type: String, required: true },
        secondaryMobileNo: { type: String },
        primaryEmail: { type: String, required: true },
        secondaryEmail: { type: String },
        registeredFor: {
            type: String,
            enum: ["Retrieval", "Transplant", "both"],
            required: true,
        },
        hospitalRegistrationNo: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Donor" }],
    },
    {
        timestamps: true,
    }
);

const Hospital = mongoose.models.Hospital || mongoose.model<IHospital>("Hospital", hospitalSchema);

export default Hospital;
