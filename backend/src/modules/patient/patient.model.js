import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';


const Patient = sequelize.define('patient', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthDate: {
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
    Patient.belongsTo(models.User, { foreignKey: 'user_id', targetKey: 'id', onDelete: 'CASCADE' });
    Patient.hasMany(models.Appointment, { onDelete: 'CASCADE' });
};

export { Patient };
