import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';
import { Doctor } from '../doctors/doctor.model.js';

const Patient = sequelize.define('patient', {
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    brirtDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: false,
});


Patient.associate = (models) => {
    Patient.belongsTo(models.User, { onDelete: 'CASCADE' });
};

export { Patient };
