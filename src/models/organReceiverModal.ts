import mongoose, { Document, Schema } from "mongoose";

interface IOrganRequest extends Document {
    hospitalId: mongoose.Types.ObjectId;
    hospitalMobileNo: string;
    hospitalEmailId: string;
    organType: string;
    patientDetailsName: string;
    patientDetailsAge: number;
    patientDetailsMedicalConditionExplanation: string;
    severity: number;
    patientCity: string;
    patientDistrict: string;
    patientPincode: string;
    patientDOB: Date;
    patientAge: number;
    patientGender: string;
    patientBloodGroup: string;
    patientMobileNo: string;
    patientEmailId: string;
    allTextOrganData: string;
    patientOrgan: string;
    patientOrganRelatedDocs: string;
    referredDoctorName: string;
    referredDoctorRegId: string;
}

const organReceiverRequestSchema: Schema = new Schema(
    {
        hospitalId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true,
        },
        hospitalMobileNo: {
            type: String,
            required: true,
        },
        hospitalEmailId: {
            type: String,
            required: true,
        },
        organType: {
            type: String,
            required: true,
        },
        patientName: {
            type: String,
            required: true,
        },
        patientAge: {
            type: Number,
            required: true,
            min: 0,
        },
        patientMedicalConditionExplanation: {
            type: String,
            required: true,
        },
        severity: {
            type: Number,
            required: true,
            min: 1,
            max: 10,
        },
        patientCity: {
            type: String,
            required: true,
        },
        patientDistrict: {
            type: String,
            required: true,
        },
        patientPincode: {
            type: String,
            required: true,
        },
        patientDOB: {
            type: String,
            required: true,
        },
        patientGender: {
            type: String,
            required: true,
            enum: ["Male", "Female", "Other"],
        },
        patientBloodGroup: {
            type: String,
            required: true,
        },
        patientMobileNo: {
            type: String,
            required: true,
        },
        patientEmailId: {
            type: String,
            required: true,
        },
        patientOrgan: {
            type: String,
            required: true
        },
        patientOrganRelatedDocs: {
            type: String,
            required: true,
        },
        allTextOrganData: {
            type: String,
            required: true,
        },
        referredDoctorName: {
            type: String,
            required: true,
        },
        referredDoctorRegId: {
            type: String,
            required: true,
        },
        organAlotmentStatus: {
            type: String,
            required: true,
            enum: ["Pending", "Approved", "Canceled"],
            default: "Pending",
        },

    },
    {
        timestamps: true,
    }
);

export default mongoose.models.OrganReceiverRequest || mongoose.model<IOrganRequest>(
    "OrganReceiverRequest",
    organReceiverRequestSchema
);
