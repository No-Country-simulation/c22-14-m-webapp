import { AppointmentRepository } from "./appointment.repository.js";

/**
 * Service component of the Appointment Entity, containing the main logic of scheduling and showing appointments
 */
class AppointmentService {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
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