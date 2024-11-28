import { DatabaseError, DataTypes } from "sequelize";
import { sequelize } from "../../config/db/index.js";
import { Doctor } from "../doctors/doctor.model.js";
import { Patient } from "../patients/patient.model.js";

/**
 * The medical appointment model
 */
const Appointment = sequelize.define('appointment', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    patient_id: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "patient_id"
    },
    doctor_id: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "doctor_id"
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
    },
    notes: {
        type: DataTypes.TEXT
    }
})

Doctor.hasMany(Appointment, {
    foreignKey: 'doctor_id',
    type: DataTypes.UUID
});
Appointment.belongsTo(Doctor, {
    foreignKey: 'doctor_id',
});

Patient.hasMany(Appointment, {
    foreignKey: 'patient_id',
    type: DataTypes.UUID
});
Appointment.belongsTo(Patient, {
    foreignKey: 'patient_id',
});

export { Appointment }