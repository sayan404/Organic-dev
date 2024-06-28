import mongoose, { Document, Schema } from "mongoose";

interface IDonor extends Document {
    name: string;
    parentName: string;
    currentResidentialAddress: string;
    address: string;
    state: string;
    city: string;
    district: string;
    street: string;
    pincode: string;
    dob: Date;
    age: number;
    gender: "Male" | "Female" | "Other";
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    mobileNo: string;
    emailId: string;
    occupation: string;
    aadharNo: string;
}

const DonorSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        parentName: { type: String, required: true },
        currentResidentialAddress: { type: String, required: true },
        address: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String, required: true },
        street: { type: String, required: true },
        pincode: { type: String, required: true },
        dob: { type: Date, required: true },
        age: { type: Number, required: true },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true,
        },
        bloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            required: true,
        },
        mobileNo: { type: String, required: true },
        emailId: { type: String, required: true },
        occupation: { type: String, required: true },
        aadharNo: { type: String, required: true, unique: true },
        donateRequests: [{
            type: Schema.Types.ObjectId,
            ref: "DonorRequest"
        }]
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.donors || mongoose.model<IDonor>("Donor", DonorSchema);
