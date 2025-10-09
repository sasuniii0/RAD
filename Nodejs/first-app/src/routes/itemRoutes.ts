import { Request, Response, Router } from "express";
import { send } from "process";
import { getAllItems } from "../controller/itemController";

const route = Router()

route.get("/getAllItem", getAllItems)

export default route