import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const product = await Product.findAll();
        res.status(200).json({ ok: true, product });
    } catch (error) {
        res.status(500).json({ msg: "Error en el servidor" })
    }
}