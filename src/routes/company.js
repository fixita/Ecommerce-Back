import { Router } from "express";
import { createCompany, getCompanies } from "../controllers/company.js";

const router = Router();

//Definimos rutas
router.get('/getAll', getCompanies);
router.post('/new', createCompany);

export default router;