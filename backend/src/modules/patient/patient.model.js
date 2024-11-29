import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';

const Patient = sequelize.define('patient', {
    birthDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  });

  export { Patient }