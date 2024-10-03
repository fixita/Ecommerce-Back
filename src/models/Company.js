// src/models/Company.js
import { DataTypes, Model } from '@sequelize/core';
import sequelize from '../db/config.js'; // Ajusta la ruta según sea necesario
import Address from './Address.js'; // Importa el modelo Address

class Company extends Model {}

Company.init(
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
    rut: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fk_address: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Address,
        key: 'id',
      },
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: 'Company',
    tableName: 'company',
    timestamps: false, 
  }
);

// Define la relación con las nuevas opciones
Company.belongsTo(Address, {
  foreignKey: {
    name: 'fk_address',
    allowNull: true,
    onDelete: 'SET NULL', // Especifica la acción en caso de eliminación
    onUpdate: 'CASCADE', // Especifica la acción en caso de actualización
  },
});

export default Company;
