import mongoose, { Document, Schema } from "mongoose";

//TypeScript Interface --> definition of the structure of the user object
export interface IUser extends Document {
    name: string
    email: string
    age?: number
}

const UserSchema = new Schema<IUser>(
{
    name:{ type: String, required: true },
    email:{ type: String, required: true, unique: true },
    age:{ type: Number, required: false }
},
{ 
    timestamps: true 
}
)

export const User = mongoose.model<IUser>("User", UserSchema);