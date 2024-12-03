import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';

const Doctor = sequelize.define('Doctor', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        foreignKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    especialty: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lisenceNumber: { 
        type: DataTypes.STRING, 
        allowNull: true,
    }
});


export { Doctor };
