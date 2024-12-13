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
        const { patient_email, patient_phone } = appointmentData;
    
        // Validar que se proporcione al menos el correo del paciente
        if (!patient_email) {
            throw new Error("El correo electrónico del paciente es obligatorio.");
        }
    
        // Buscar el usuario asociado al correo
        const user = await this.appointmentRepository.appointmentModel.sequelize.models.User.findOne({
            where: { email: patient_email },
            include: [{ model: this.appointmentRepository.appointmentModel.sequelize.models.Patient }],
        });
    
        // Validar si el usuario existe y es un paciente
        if (!user || user.role !== 'patient') {
            throw new Error("Paciente no encontrado o no válido.");
        }
    
        // Recuperar el ID del paciente
        const patient = user.Patient;
        if (!patient) {
            throw new Error("No se encontraron datos asociados al paciente.");
        }
    
        // Asignar el `patient_id` a la cita
        appointmentData.patient_id = patient.id;
    
        // Crear la cita
        const newAppointment = await this.appointmentRepository.create(appointmentData);
    
        // Opcional: incluir información relacionada en la respuesta
        const appointmentWithDetails = await this.appointmentRepository.appointmentModel.findByPk(newAppointment.id, {
            include: [
                { model: this.appointmentRepository.appointmentModel.sequelize.models.Patient },
                { model: this.appointmentRepository.appointmentModel.sequelize.models.Doctor },
            ],
        });
    
        return appointmentWithDetails;
    }
    
}

export { AppointmentService }