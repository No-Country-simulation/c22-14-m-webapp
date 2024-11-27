import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';
import { Appoiment } from '../appoiments/appoiment.model.js';


//solo crear un post con los datos de la cita.


const MedicalHistory = sequelize.define( 'MedicalHistory',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    appoiment_id: {
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

MedicalHistory.belongsTo(Appoiment, { foreignKey: 'appoimentId'});


export { MedicalHistory };