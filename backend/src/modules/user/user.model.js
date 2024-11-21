import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';

const User = sequelize.define('user', {
    id: {
        type: DataTypes.UUIDV1,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

export { User };
