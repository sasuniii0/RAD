import mongoose, { Document, Schema } from "mongoose";

export enum Role{
    ADMIN="ADMIN",
    USER="USER",
    AUTHOR="AUTHOR"
}

export enum Status{
    PENDING="PENDING",
    APPROVED="APPROVED",
    REJECTED="REJECTED"
}   

export interface IUser extends Document {
    _id: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role[];
    approved: Status;
}

const UserSchema = new Schema<IUser>({
    firstName: { type: String, required: true ,unique:true},
    lastName: { type: String, required: true ,unique:true},
    email: { type: String, required: true, unique: true,lowercase:true },
    password: { type: String, required: true },
    role: { type: [String], enum:Object.values(Role), default: [Role.USER] },
    approved: { 
        type: String, 
        enum: Object.values(Status), 
        default: Status.PENDING },
});

export const User = mongoose.model<IUser>("User", UserSchema);