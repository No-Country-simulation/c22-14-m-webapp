import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db/index";
import { Doctor } from "../doctors/doctor.model";
import { Patient } from "../patients/patient.model";

/**
 * The medical appointment model
 */
const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.UUIDV1,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false
    },
    patient_id: {
        type: DataTypes.UUIDV1,
        allowNull: false
    },
    doctor_id: {
        type: DataTypes.UUIDV1,
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