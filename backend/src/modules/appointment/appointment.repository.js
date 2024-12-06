import { Appointment } from "./appointment.model.js";
import { Model } from "sequelize";

/**
 * Repository component of the Appointment Entity, calling the appropiate Sequelize functions
 */
class AppointmentRepository {
    /**
     * Start up the Appointment Repository component
     * @param { Appointment } appointmentModel The Appointment model
     */
    constructor(appointmentModel) {
        this.appointmentModel = appointmentModel;
    }

    /**
     * Create an appointment record
     * @param { Appointment } appointmentData The fields of the new data 
     * @returns { Model } The model object of the saved Appointment record
     */
    async create(appointmentData) {
        return await this.appointmentModel.create(appointmentData);
    }
}

export { AppointmentRepository }