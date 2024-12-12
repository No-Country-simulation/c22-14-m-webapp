import { AppointmentRepository } from "./appointment.repository.js";

/**
 * Service component of the Appointment Entity, containing the main logic of scheduling and showing appointments
 */
class AppointmentService {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    /**
     * Up
     * @param {string} id The ID of the appointment to update
     * @param {"scheduled"|"completed"|"cancelled"} newStatus 
     * @returns {Appointment} The updated appointment
     */
    async updateStatus(id, newStatus) {
        return await this.appointmentRepository.updateStatus(id, newStatus);
    }

    /**
     * Assign a doctor to an appointment
     * @param {string} id The ID of the appointment to assign the Doctor
     * @param {string} doctor_id The ID of the doctor to assign
     */
    async assignDoctor(id, doctor_id) {
        return await this.appointmentRepository.updateDoctorId(id, doctor_id);
    }

    /**
     * Get all appointments, with an optional filter
     * @param {null | "unassigned" | "assigned" | "finished"} filter What appointments to return (null for all appointments)
     * @returns { Appointments[] }
     */
    async getAppointments(filter) {
        if (!filter) {
            return this.appointmentRepository.findAll({
                include: [
                    { model: this.appointmentRepository.appointmentModel.sequelize.models.patient, attributes: [], required: false },
                    { model: this.appointmentRepository.appointmentModel.sequelize.models.doctor,attributes: [], required: false }
                ]
            })
        }
        else {
            switch (filter) {
                case "unassigned": {
                    return this.appointmentRepository.findUnassigned({
                        include: [
                            { model: this.appointmentRepository.appointmentModel.sequelize.models.patient, attributes: [], required: false },
                        ]
                    });
                }
                case "assigned": {
                    return this.appointmentRepository.findAssigned({
                        include: [
                            { model: this.appointmentRepository.appointmentModel.sequelize.models.patient, attributes: [], required: false },
                            { model: this.appointmentRepository.appointmentModel.sequelize.models.doctor,attributes: [], required: false }
                        ]
                    });
                }
                case "finished": {
                    return this.appointmentRepository.findFinished({
                        include: [
                            { model: this.appointmentRepository.appointmentModel.sequelize.models.patient, attributes: [], required: false },
                            { model: this.appointmentRepository.appointmentModel.sequelize.models.doctor,attributes: [], required: false }
                        ]
                    });
                }
                default: {
                    throw new Error("Filtro Invalido");
                    
                }
            }
        }
    }

    /**
     * Schedule a new appointment
     * @param { AppointmentRepository } appointmentData Appointment scheduling data
     * @returns { Model } The model object of the saved Appointment record
     */
    async scheduleAppointment(appointmentData) {
        const newAppointment = await this.appointmentRepository.create(appointmentData);
        console.log(this.appointmentRepository.appointmentModel.sequelize.models);
        const appointmentWithDetails = await this.appointmentRepository.appointmentModel.findByPk(newAppointment.id, {
            include: [
                { model: this.appointmentRepository.appointmentModel.sequelize.models.patient, attributes: [], required: false },
                { model: this.appointmentRepository.appointmentModel.sequelize.models.doctor,attributes: [], required: false } 
            ]
        });
        return appointmentWithDetails;
    }
}

export { AppointmentService }