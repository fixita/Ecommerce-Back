import { Router } from "express";
import { getProducts, createProduct } from "../controllers/product.js";

const router = Router();

//Definimos rutas
router.get('/getAll', getProducts);
router.post('/new', createProduct);

export default router;