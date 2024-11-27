import { AppointmentService } from "./appointment.service.js";

class AppointmentController {
    /**
     * 
     * @param { AppointmentService } appointmentService 
     */
    consturctor(appointmentService) {
        this.appointmentService = appointmentService;
    }

    /**
     * 
     * @param {Request} req 
     * @param {*} res 
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