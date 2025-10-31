import { Request,Response,Router } from "express";
import {userLogin,userRegister,getUserDetail,adminRegister} from "../controllers/authController";

const route=Router();

route.post("/register",userRegister);

route.post("/login",userLogin);

route.get('/me',getUserDetail);

route.post("/admin/register",adminRegister);

export default route;