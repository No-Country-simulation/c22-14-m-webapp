import { AppointmentService } from "./appointment.service.js";
import { Model, Op, where } from "sequelize";

/**
 * The Controller component of the Appointment entity, recieving and retrieving data from the Front-End
 */
class AppointmentController {
    /**
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
            const { patient_email, patient_phone, ...appointmentData } = req.body;
    

            if (!patient_email && !patient_phone) {
                throw new Error("Se requiere al menos el correo electrónico o el teléfono del paciente.");
            }
    
            const patient = await this.appointmentRepository.appointmentModel.sequelize.models.Patient.findOne({
                where: {
                    [Op.or]: [
                        { email: patient_email }, 
                        { phoneNumber: patient_phone }
                    ]
                }
            });

            if (!patient) {
                throw new Error("No se encontró un paciente con los datos proporcionados.");
            }

            appointmentData.patient_id = patient.id;
    
            const newAppointment = await this.appointmentService.scheduleAppointment(appointmentData);
    
            res.status(200).json(newAppointment);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    
}

export { AppointmentController };