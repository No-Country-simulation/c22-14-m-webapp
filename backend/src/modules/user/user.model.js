import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';

const User = sequelize.define('user', {
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    role: {
        type: DataTypes.ENUM('doctor', 'patient', 'admin'),
        allowNull: false,
        defaultValue: 'patient',
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

User.associate = (models) => {
    User.hasOne(models.Doctor);
    User.hasOne(models.Patient);
    User.hasOne(models.Admin);
};

export { User };
