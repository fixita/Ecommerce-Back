import { DataTypes, Model } from '@sequelize/core';
import sequelize from '../db/config.js'; // Ajusta la ruta según sea necesario

class Address extends Model {}

Address.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Address',
    tableName: 'address',
    timestamps: false, // Cambia a true si usas campos createdAt y updatedAt
  }
);

export default Address;