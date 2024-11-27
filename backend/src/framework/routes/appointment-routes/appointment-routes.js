import { Router } from 'express';
import { AppointmentController } from '../../../modules/appointment/appointment.controller.js';
import { AppointmentRepository } from '../../../modules/appointment/appointment.repository.js';
import { Appointment } from '../../../modules/appointment/appointment.model.js';
import { AppointmentService } from '../../../modules/appointment/appointment.service.js';

const appointmentRoutes = Router();

const appointmentRepository = new AppointmentRepository(Appointment);
const appointmentService = new AppointmentService(appointmentRepository);
const appointmentController = new AppointmentController(appointmentService);

appointmentRoutes.post('/appointments/schedule', (req, res) => appointmentController.schedule(req, res));

export default appointmentRoutes;