import { AppointmentRepository } from "./appointment.repository.js";

class AppointmentService {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    
    async updateStatus(id, newStatus) {
        return await this.appointmentRepository.updateStatus(id, newStatus);
    }

    async assignDoctor(id, doctor_id) {
        return await this.appointmentRepository.updateDoctorId(id, doctor_id);
    }

    async getAppointments(status) {
        if (!status) {
            return this.appointmentRepository.findAll();
        }
        else {
            switch (status) {
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

    async getAppointmentsByUser(userId) {
        return await this.appointmentRepository.findAppointmentByUser(userId);
    }

    async scheduleAppointment(appointmentData) {
        const newAppointment = await this.appointmentRepository.create(appointmentData);
        return newAppointment;
    }
}

export { AppointmentService }