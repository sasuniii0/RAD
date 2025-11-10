import mongoose, {Document,Schema} from "mongoose";

//Typescript datatypes
export interface IPost extends Document{
    _id: mongoose.Types.ObjectId
    title: string
    content: string
    tags: string []
    imageURL : string
    author : mongoose.Types.ObjectId
    createAt? : Date
    updatedAt : Date
}

//mongodb datatypes
const PostSchema = new Schema<IPost>({
    title: {type:String, required: true},
    content: {type: String , required:true},
    tags: {type:[String]},
    imageURL: {type: String},
    // similar to the realtionship
    author: {type: Schema.Types.ObjectId, ref:"User"},
},{
    timestamps: true
})

export const Post = mongoose.model<IPost>("Post",PostSchema)