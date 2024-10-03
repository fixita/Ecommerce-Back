import { Router } from "express";
import { getCompanies } from "../controllers/company.js";

const router = Router();

//Definimos rutas
router.get('/getAll', getCompanies);

export default router;