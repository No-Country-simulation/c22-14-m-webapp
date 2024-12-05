import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';

const Doctor = sequelize.define('doctor', {
    especialty: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lisenceNumber: { 
        type: DataTypes.STRING, 
        allowNull: true,
    },
},{
    timestamps: false,
});

Doctor.associate = (models) => {
    Doctor.belongsTo(models.User, { onDelete: 'CASCADE' });
  };

export { Doctor };
