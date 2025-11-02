import { Request,Response,Router } from "express";
import {userLogin,userRegister,getUserDetail,adminRegister} from "../controllers/authController";
import { authenitcate } from "../middlewares/authMiddleware";
import { isAdmin } from "../middlewares/isAdminMiddleware";
const route=Router();

route.post("/register",userRegister);

route.post("/login",userLogin);

// Protected Route
route.get('/me',authenitcate ,getUserDetail);

route.post("/admin/register",authenitcate,adminRegister,isAdmin);

export default route;