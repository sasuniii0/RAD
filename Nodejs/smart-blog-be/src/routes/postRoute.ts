import { Request, Response, Router} from "express";
import { authenitcate } from "../middlewares/authMiddleware";
import { requireRole } from "../middlewares/roleRequiredMiddleware";
import { savePost,viewAllPost,getMyPost } from "../controllers/postController";
import { Role } from "../models/userModel";

const route = Router();

//protected => admin and author
route.post("/create",authenitcate,requireRole([Role.ADMIN,Role.AUTHOR]), savePost);

route.get("/", viewAllPost);

//protected => admin and author
route.get("/mypost" ,authenitcate,requireRole([Role.ADMIN,Role.AUTHOR]), getMyPost);

export default route;