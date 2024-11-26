import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';
import { Doctor } from '../doctors/doctor.model.js';

const Patient = sequelize.define('Patient', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    medicalHistory: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});


Doctor.hasMany(Patient, { foreignKey: 'doctorId', onDelete: 'CASCADE' });
Patient.belongsTo(Doctor, { foreignKey: 'doctorId' });


export { Patient };