import { Router } from "express";
import { getProducts } from "../controllers/product.js";

const router = Router();

//Definimos rutas
router.get('/getAll', getProducts);

export default router;