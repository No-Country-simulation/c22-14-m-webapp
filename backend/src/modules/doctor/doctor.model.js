import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';

const Doctor = sequelize.define('doctor', {
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    licenseNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    timestamps: false,
});

Doctor.associate = (models) => {
  Doctor.belongsTo(models.User, { onDelete: 'CASCADE' });
};

  export { Doctor }