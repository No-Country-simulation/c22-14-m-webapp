import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';

const Appointment = sequelize.define('appointment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    hours: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

Appointment.associate = (models) => {
    Appointment.belongsTo(models.User, { as: 'Doctor', foreignKey: { name: 'doctorId', allowNull: true }, onDelete: 'CASCADE' });
    Appointment.belongsTo(models.User, { as: 'Patient', foreignKey: 'patientId', onDelete: 'CASCADE' });
};

export { Appointment };
