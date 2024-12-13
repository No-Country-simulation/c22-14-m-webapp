import { AppointmentService } from "./appointment.service.js";

class AppointmentController {
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
    
    async getAppointments(req, res) {
        try {
            const filter = req.body.filter;
            const appointments = await this.appointmentService.getAppointments(filter);
            res.status(200).json(appointments);
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }

    async getAppointmentsByUser(req, res) {
        const { userId } = req.params
        try {
            const appointments = await this.appointmentService.getAppointmentsByUser(userId);
            res.status(200).json(appointments);
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }

    async schedule(req, res) {
        try {
            const newAppointment = await this.appointmentService.scheduleAppointment(req.body);
            res.status(200).json(newAppointment);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

export { AppointmentController };