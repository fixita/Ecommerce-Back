import Company from "../models/Company.js";

export const getCompanies = async (req, res) => {
    try {
        const companies = await Company.findAll();
        res.status(200).json({ ok: true, companies });
    } catch (error) {
        res.status(500).json({ msg: "Error en el servidor" })
    }
}