import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';
import { Appoiment } from '../appoiments/appoiment.model.js';

const MedicalHistory = sequelize.define( 'MedicationHistory',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    appoimment_id: {
        type: DataTypes.UUID,
        foreignKey: true,
    },
    consultation: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    diagnosis: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    treatment: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
})

MedicalHistory.belongsTo(Appoiment, { foreignKey: 'appoimmentId'});


export { MedicationHistory };