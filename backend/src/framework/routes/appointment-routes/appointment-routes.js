import { Router } from 'express';
import { AppointmentController } from '../../../modules/appointment/appointment.controller';
import { AppointmentRepository } from '../../../modules/appointment/appointment.repository';
import { Appointment } from '../../../modules/appointment/appointment.model';
import { AppointmentService } from '../../../modules/appointment/appointment.service';

const appointmentRoutes = Router();

const appointmentRepository = new AppointmentRepository(Appointment);
const appointmentService = new AppointmentService(appointmentRepository);
const appointmentController = new AppointmentController(appointmentService);

appointmentRoutes.post('/schedule', (req, res) => appointmentController.schedule(req, res));