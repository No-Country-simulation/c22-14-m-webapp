import { Appointment } from "./appointment.model.js";
import { AppointmentRepository } from "./appointment.repository.js";
import { AppointmentService } from "./appointment.service.js";
import { AppointmentController } from "./appointment.controller.js";

const appointmentRepository = new AppointmentRepository(Appointment);
const appointmentService = new AppointmentService(appointmentRepository);
const AppointmentController = new AppointmentController(appointmentService);

export { Appointment, AppointmentController }