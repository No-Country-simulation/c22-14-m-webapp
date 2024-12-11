import { AppointmentRepository } from "./appointment.repository.js";

/**
 * Service component of the Appointment Entity, containing the main logic of scheduling and showing appointments
 */
class AppointmentService {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    /**
     * Get all appointments, with an optional filter
     * @param {null | "unassigned" | "assigned" | "finished"} filter What appointments to return (null for all appointments)
     * @returns { Appointments[] }
     */
    async getAppointments(filter) {
        if (!filter) {
            return this.appointmentRepository.findAll();
        }
        else {
            switch (filter) {
                case "unassigned": {
                    return this.appointmentRepository.findUnassigned();
                }
                case "assigned": {
                    return this.appointmentRepository.findAssigned();
                }
                case "finished": {
                    return this.appointmentRepository.findFinished();
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
        const newAppointment = this.appointmentRepository.create(appointmentData);
        return newAppointment;
    }
}

export { AppointmentService }