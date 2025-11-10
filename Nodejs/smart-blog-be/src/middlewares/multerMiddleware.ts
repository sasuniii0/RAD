import multer from "multer";
// disk or memory eke data store krnwa

//memory
const storage = multer.memoryStorage()

export const upload = multer({storage})