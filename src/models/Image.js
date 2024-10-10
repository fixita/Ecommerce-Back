import { DataTypes, Model } from '@sequelize/core';
import sequelize from '../db/config.js'; // Ajusta la ruta según sea necesario
import Product from './Product.js';

class Image extends Model {}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    public_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fk_product: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Product,
        key: 'id',
      },
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    modelName: 'Image',
    tableName: 'product_image',
    timestamps: false, 
  }
);

// Define la relación con las nuevas opciones
Image.belongsTo(Product, {
  foreignKey: {
    name: 'fk_product',
    allowNull: true,
    onDelete: 'CASCADE', // Especifica la acción en caso de eliminación
    onUpdate: 'CASCADE', // Especifica la acción en caso de actualización
  },
});

export default Image;
