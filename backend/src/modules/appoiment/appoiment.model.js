import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';

const Appoiment = sequelize.define('appoiment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
        autoIncrement: true,
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

Appoiment.associate = (models) => {
    Appoiment.belongsTo(models.Doctor, { onDelete: 'CASCADE' });
    Appoiment.belongsTo(models.Patient, { onDelete: 'CASCADE' });
};

export { Appoiment };