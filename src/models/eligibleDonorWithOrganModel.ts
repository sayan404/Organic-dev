import mongoose, { Schema, Document } from 'mongoose';

interface IDonor extends Document {
    donorType: 'Live' | 'Deceased';
    nomineeName?: string;
    nomineeContactNumber?: string;
    name: string;
    address: string;
    state: string;
    city: string;
    street: string;
    pincode: string;
    requestId: mongoose.Types.ObjectId;
    hospitalId: mongoose.Types.ObjectId;
    checkupDate: Date;
    doctorName: string;
    doctorContact: string;
    doctorRegistrationNumber: string;
    checkupResults: string;
    checkupRelatedDocuments: string[];
    createdAt: Date;
    updatedAt: Date;
}

const eligibleDonorWtihOrganDetail: Schema = new Schema(
    {
        donorType: {
            type: String,
            enum: ['Live', 'Deceased'],
            required: true,
        },
        nomineeName: {
            type: String,
        },
        nomineeContactNumber: {
            type: String,
        },
        donorId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        donorName: {
            type: String,
        },
        hospitalId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',

        },
        organType: {
            type: String,

        },
        bloodType: {
            type: String,
        },
        organDescription: {
            type: String,
        },
        allTextOrganData: {
            type: String,
        },
        availabilityStatus: {
            type: String,
            enum: ['Available', 'Reserved', 'Transplanted'],

        },
        doctorName: {
            type: String,

        },
        doctorContact: {
            type: String,
        },
        doctorRegistrationNumber: {
            type: String,
        },
        checkupResults: {
            type: String
        },
        checkupRelatedDocument: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.EligibleDonorWithOrganDetail || mongoose.model<IDonor>('EligibleDonorWithOrganDetail', eligibleDonorWtihOrganDetail);
