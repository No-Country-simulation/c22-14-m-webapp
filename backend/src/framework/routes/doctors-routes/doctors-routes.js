import express from 'express';
import { doctorController } from '../../../modules/doctor/doctor.js';

const doctorsRoutes = express.Router();

doctorsRoutes.get('/doctors/:id', (req, res) => doctorController.getDoctor(req, res));
doctorsRoutes.post('/doctors', (req, res) => doctorController.createDoctor(req, res));

export default doctorsRoutes;