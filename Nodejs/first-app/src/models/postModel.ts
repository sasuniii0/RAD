import mongoose, { Document } from "mongoose";
import { IUser } from "./userModel";
export interface IPost extends Document{
    title: string
    content: string
    userId: mongoose.Types.ObjectId | IUser
}

const PostSchema = new mongoose.Schema<IPost>(
{
    title:{ type: String, required: true },
    content:{ type: String, required: true },
    userId:{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
},
{ 
    timestamps: true 
}
)

export const Post = mongoose.model<IPost>("Post", PostSchema);