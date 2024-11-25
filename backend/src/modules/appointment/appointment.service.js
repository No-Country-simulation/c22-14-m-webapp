import { AppointmentRepository } from "./appointment.repository";

/**
 * Service component of the Appointment Entity
 */
class AppointmentService {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    /**
     * Schedule a new appointment
     * @param { AppointmentRepository } appointmentData Appointment scheduling data
     */
    async scheduleAppointment(appointmentData) {
        const newAppointment = this.appointmentRepository.create(appointmentData);
        return newAppointment;
    }
}

export { AppointmentService }