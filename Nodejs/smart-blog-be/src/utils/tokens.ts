import dotenv from 'dotenv';
import { IUser } from '../models/userModel';
import jwt from 'jsonwebtoken';

// Load environment variables from .env file
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string

export const signAccessToken = (user:IUser):string =>{
    return jwt.sign(
        {
            sub:user._id.toString(),
            role:user.role
        },
        JWT_SECRET,
        {
            expiresIn:'1h'
        })
}

//get refresh token from the accesstoken
export const signRefreshToken = (user:IUser) :string =>{
    return jwt.sign(
        {
            sub:user._id.toString()
        },
        JWT_REFRESH_SECRET,
        {
            expiresIn: "7d"
        }
    )
}

