import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const product = await Product.findAll();
        res.status(200).json({ ok: true, product });
    } catch (error) {
        res.status(500).json({ msg: "Error en el servidor" });
    }
}

export const createProduct = async (req, res) => {
    const {name, sku, code, description} = req.body;
    try {
        const newProduct = await Product.create({
            name,
            sku,
            code,
            description,
        });

        res.status(201).json({ok:true, product: newProduct});

    } catch (error) {
        res.status(500).json({ msg: "Error en el servidor" });        
    }
}