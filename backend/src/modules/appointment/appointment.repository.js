import { Appointment } from "./appointment.model.js";
import { Model, Op, where } from "sequelize";

/**
 * Repository component of the Appointment Entity, calling the appropiate Sequelize functions
 */
class AppointmentRepository {
    constructor(appointmentModel) {
        this.appointmentModel = appointmentModel;
    }

    async updateStatus(id, newStatus) {
        const appointment = await this.appointmentModel.findByPk(id);
        appointment.status = newStatus;
        return await appointment.save();
    }

    async updateDoctorId(id, doctor_id) {
        const appointment = await this.appointmentModel.findByPk(id);
        appointment.doctor_id = doctor_id;
        return await appointment.save();
    }

    async findAll() {
        return await this.appointmentModel.findAll();
    }

    async findUnassigned() {
        return await this.appointmentModel.findAll({
            where: {
                doctor_id: {
                    [Op.eq]: null
                }
            }
        });
    }

    async findAssigned() {
        return await this.appointmentModel.findAll({
            where: {
                doctor_id: {
                    [Op.not]: null
                }
            }
        });
    }

    async findFinished() {
        return await this.appointmentModel.findAll({
            where: {
                status: {
                    [Op.eq]: "completed"
                }
            }
        });
    }

    async findAppointmentByUser(userId) {
        const appointments =  await this.appointmentModel.findAll({
            where: {
                [Op.or]: [{ doctorId: userId }, { patientId: userId }]
            }
        });
        return appointments
    }
    async create(appointmentData) {
        return await this.appointmentModel.create(appointmentData);
    }
}

export { AppointmentRepository }