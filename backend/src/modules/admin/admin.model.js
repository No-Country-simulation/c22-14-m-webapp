const Admin = sequelize.define('Admin', {
    department: {
      type: DataTypes.STRING,
    },
  });

//! mover al global
// Doctor.belongsTo(User, { onDelete: 'CASCADE' });
// Patient.belongsTo(User, { onDelete: 'CASCADE' });
// Admin.belongsTo(User, { onDelete: 'CASCADE' });

export { Admin}