import { Appointment } from "./appointment.model.js";
import { Model, Op, where } from "sequelize";

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
     * Fetch all appointments
     * @returns { Appointment[] } All appointments
     */
    async findAll() {
        return await this.appointmentModel.findAll();
    }

    /**
     * Fetch all appointments without a doctor assigned
     * @returns { Appointment[] } All appointments without a doctor assigned
     */
    async findUnassigned() {
        return await this.appointmentModel.findAll({
            where: {
                doctor_id: {
                    [Op.eq]: null
                }
            }
        });
    }

    /**
     * Fetch all appointments with an assigned doctor
     * @returns { Appointment[] } All appointments with a doctor assigned to them
     */
    async findAssigned() {
        return await this.appointmentModel.findAll({
            where: {
                doctor_id: {
                    [Op.not]: null
                }
            }
        });
    }

    /**
     * Fetch all finished or completed appointments
     * @returns { Appointment[] } All finished/completed appointments
     */
    async findFinished() {
        return await this.appointmentModel.findAll({
            where: {
                status: {
                    [Op.ne]: "completed"
                }
            }
        });
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