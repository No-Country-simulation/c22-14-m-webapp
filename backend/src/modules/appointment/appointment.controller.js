import { AppointmentService } from "./appointment.service.js";

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
            const newAppointment = await this.appointmentService.scheduleAppointment(req.body);
            res.status(200).json(newAppointment);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

export { AppointmentController };