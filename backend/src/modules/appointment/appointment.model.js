import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db/index";

const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    patient_id: {
        type: DataTypes.INTEGER,
    },
    doctor_id: {

    },
    appointment_date: {

    },
    status: {

    },
    created_at: {

    },
    updated_at: {

    }
})