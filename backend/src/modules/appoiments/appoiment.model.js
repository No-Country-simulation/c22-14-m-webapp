import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';
import { Patient } from '../patients/patient.model.js';
import { Doctor } from '../doctors/doctor.model.js';

const Appoiment = sequelize.define('Appoiment', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        foreignKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    doctor_id: {
        type: DataTypes.UUID, 
        foreignKey: true,
        allowNull: true,
    }, 
    patient_id: {
        type: DataTypes.UUID,
        foreignKey: true,
        allowNull: true,
    }, 
    date: {
        type: DataTypes.DATE,
        allowNull: true,
    }, 
    status: {
        type: DataTypes.STRING, 
        allowNull: true,
    }
})

Doctor.hasMany (Appoiment, {foreignKey: 'doctorId', onDelete: 'CASCADE' } );
Patient.hasMany(Appoiment, { foreignKey: 'patientId', onDelete: 'CASCADE' });


export { Appoiment };