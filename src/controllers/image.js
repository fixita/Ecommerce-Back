import { v2 as cloudinary } from "cloudinary";
import Image from "../models/Image.js"

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });

export const uploadImageToCloudinary = async (req, res) => {
    const { idProduct } = req.params;
    const { file } = req;
    try {
        const result = await cloudinary.uploader.upload(file.path, {
            folder: `products/${idProduct}`, // Opción para organizar por carpeta, utilizando el id del producto
            use_filename: true, // Mantener el nombre del archivo original
            unique_filename: false, // No asignar un nombre único (usa el original)
        });
        if (!result) {
            return res.status(404).json({ ok: false, msg: "Error al guardar imagen en Cloudinary!" });
        }

        const { secure_url, public_id } = result;
        await Image.create({image_url: secure_url, public_id ,fk_product: idProduct});
        res.status(201).json({ ok: true, msg: "Imagen Guardada con exito!" });
    } catch (error) {
        res.status(500).json({ msg: "Error en el servidor" });
    }
}

export const deteleImageOfCloudinary = async (req, res) => {
    const { idImage } = req.params;
    try {
        const imageToDelete = await Image.findByPk(idImage);
        if (!imageToDelete) {
            return res.status(404).json({ ok: false, msg: "Error al eliminar, No se encontro Imagen!" });
        }
        // Eliminar la imagen de Cloudinary usando el public_id almacenado
        await cloudinary.uploader.destroy(imageToDelete.public_id);

        // Eliminar el registro de la imagen de la base de datos
        await Image.destroy({ where: { id: idImage } });
        res.status(201).json({ ok: true, msg: "Imagen eliminada con Exito!" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
}