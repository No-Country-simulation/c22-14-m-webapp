import { Appointment } from "./appointment.model.js";
import { Model } from "sequelize";

/**
 * Repository component of the Appointment Entity
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
     * @param {Appointment} appointmentData 
     * @returns { Model }
     */
    async create(appointmentData) {
        return await this.appointmentModel.create(appointmentData);
    }
}

export { AppointmentRepository }