import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';
import { Doctor } from '../doctors/doctor.model.js';

const Patient = sequelize.define('Patient', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        foreignKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    brirtDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});


Doctor.hasMany(Patient, { foreignKey: 'doctorId', onDelete: 'CASCADE' });
Patient.belongsTo(Doctor, { foreignKey: 'doctorId' });


export { Patient };
