import { Router } from "express";
import companyRoutes from './company.js'
import productRoutes from './product.js'

const router = Router();

//Definimos rutas
router.use('/company', companyRoutes);
router.use('/product', productRoutes);

export default router;
