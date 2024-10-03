import { Router } from "express";
import companyRoutes from './company.js'

const router = Router();

//Definimos rutas
router.use('/company', companyRoutes);

export default router;
