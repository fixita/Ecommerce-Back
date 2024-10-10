import Address from "../models/Address.js";
import Company from "../models/Company.js";

export const getCompanies = async (req, res) => {
    try {
        const companies = await Company.findAll({
          include: [
            {
              model: Address
            }
          ]
        });
        res.status(200).json({ ok: true, companies });
    } catch (error) {
        res.status(500).json({ msg: "Error en el servidor" })
    }
}

// Función para crear un nuevo usuario
export const createCompany = async (req, res) => {
  try {
    const { name, rut, email, fk_address } = req.body; 

    const newCompany = await Company.create({
      name,
      rut,
      email,
      fk_address,
    });

    return res.status(201).json({
      ok:true,
      company: newCompany,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al crear company',
      error: error.message,
    });
  }
};
