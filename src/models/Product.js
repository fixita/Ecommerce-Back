import { DataTypes, Model } from '@sequelize/core';
import sequelize from '../db/config.js'; // Ajusta la ruta según sea necesario

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    sku: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'product',
    timestamps: false, // Si no tienes campos de timestamps en la tabla
  }
);

export default Product;
