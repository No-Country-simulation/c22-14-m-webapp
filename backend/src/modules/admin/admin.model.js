import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';

const Admin = sequelize.define('admin', {
    department: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
});

Admin.associate = (models) => {
  Admin.belongsTo(models.User, { onDelete: 'CASCADE' });
};

export { Admin }