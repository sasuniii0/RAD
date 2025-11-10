import { Request, Response, Router} from "express";
import { authenitcate } from "../middlewares/authMiddleware";
import { requireRole } from "../middlewares/roleRequiredMiddleware";
import { savePost,viewAllPost,getMyPost } from "../controllers/postController";
import { Role } from "../models/userModel";
import { upload } from "../middlewares/multerMiddleware";

const route = Router();

//protected => admin and author
route.post("/create",authenitcate,requireRole([Role.ADMIN,Role.AUTHOR]),upload.single("image"), savePost);
// upload.single("image") => form data eke key eke name eka thamai api denna one
// upload.array kyla gnne files godak gnna one nam..

route.get("/", viewAllPost);

//protected => admin and author
route.get("/mypost" ,authenitcate,requireRole([Role.ADMIN,Role.AUTHOR]), getMyPost);

export default route;