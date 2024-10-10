import { Router } from "express";
import companyRoutes from './company.js'
import productRoutes from './product.js'
import imageRoutes from './image.js'

const router = Router();

//Definimos rutas
router.use('/company', companyRoutes);
router.use('/product', productRoutes);
router.use('/image', imageRoutes);

export default router;
