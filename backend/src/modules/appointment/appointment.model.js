import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db/index.js";
import { Doctor } from "../doctors/doctor.model.js";
import { Patient } from "../patients/patient.model.js";

/**
 * The medical appointment model
 */
const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    patient_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    doctor_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    appointment_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: 'scheduled',
        validate: {
            is: /^(?:scheduled|completed|cancelled)/
        }
    }
})

Doctor.hasMany(Appointment, {
    name: 'doctor_id',
    type: DataTypes.UUIDV1
});
Appointment.belongsTo(Doctor);

Patient.hasMany(Appointment, {
    name: 'patient_id',
    type: DataTypes.UUIDV1
});
Appointment.belongsTo(Patient);

export { Appointment }