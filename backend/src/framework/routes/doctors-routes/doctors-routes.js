import express from 'express';
import { doctorController } from './doctor.module.js';

const router = express.Router();

router.get('/doctors/:id', (req, res) => doctorController.getDoctor(req, res));
router.post('/doctors', (req, res) => doctorController.createDoctor(req, res));

export default router;