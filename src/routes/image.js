import { Router } from "express";
import multer from "multer";
import { deteleImageOfCloudinary, uploadImageToCloudinary } from "../controllers/image.js";

const router = Router();
const upload = multer({dest: 'uploads/'});

router.post('/upload/:idProduct', upload.single('image') ,uploadImageToCloudinary);
router.delete('/delete/:idImage',deteleImageOfCloudinary);

export default router;