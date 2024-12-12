import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/index.js';


const Doctor = sequelize.define('doctor', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    specialty: {
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
    Doctor.belongsTo(models.User, { foreignKey: 'user_id', targetKey: 'id', onDelete: 'CASCADE' });
    Doctor.hasMany (models.Appointment, { onDelete: 'CASCADE' } );
  };

export { Doctor };
