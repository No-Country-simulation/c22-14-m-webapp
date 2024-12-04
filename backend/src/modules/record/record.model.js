import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';
//solo crear un post con los datos de la cita.

const Record = sequelize.define( 'record',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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

Record.associate = (models) => {
    Record.belongsTo(models.Appoiment, { onDelete: 'CASCADE' });
};


export { Record };