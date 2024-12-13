import { AppointmentService } from "./appointment.service.js";
import { Patient } from "../patient/patient.model.js";

/**
 * The Controller component of the Appointment entity, recieving and retrieving data from the Front-End
 */
class AppointmentController {
    /**
     * 
     * Start the Controller component of the Appointment entity
     * @param { AppointmentService } appointmentService 
     */
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }

    async updateStatus(req, res) {
        const id = req.params.appointment_id;
        const { status } = req.body;
        try {
            const appointment = await this.appointmentService.updateStatus(id, status);
            res.status(200).json(appointment);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    /**
     * 
     * @param {Request} req The Request object of Express
     * @param {Request} res The Response object of Express
     */
    async assignDoctor(req, res) {
        const id = req.params.appointment_id;
        const { doctor_id } = req.body;
        try {
            const appointment = await this.appointmentService.assignDoctor(id, doctor_id);
            res.status(200).json(appointment);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    /**
     * Get all appointments, with an optional filter
     * @param {Request} req The Request object of Express
     * @param {Response} res The Response object of Express
     */
    async getAppointments(req, res) {
        try {
            const filter = req.body.filter;
            const appointments = await this.appointmentService.getAppointments(filter);
            res.status(200).json(appointments);
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }

    /**
     * Schedule a new appointment
     * @param {Request} req The Request object of Express
     * @param {Response} res The Response object of Express
     */
    async schedule(req, res) {
        try {
            const patientId = req.params.patient_id; // Obtener el patient_id de la URL
    
            // Verificar si el paciente existe en la base de datos
            const patient = await Patient.findByPk(patientId);
            if (!patient) {
                return res.status(404).json({ message: "Paciente no encontrado" });
            }
    
            // Agregar el patient_id al cuerpo de la cita antes de crearla
            const appointmentData = {
                ...req.body,
                patient_id: patientId, // Establecer el patient_id
            };
    
            // Crear la cita
            const newAppointment = await this.appointmentService.scheduleAppointment(appointmentData);
    
            // Devolver la cita junto con el patient_id
            res.status(200).json({
                appointment: newAppointment,
                patient_id: patientId, // Aquí se agrega el patient_id
            });
        } catch (error) {
            console.error("Error al programar cita:", error);
            res.status(404).json({ message: error.message });
        }
    }
        
}

export { AppointmentController };