import { Router } from 'express';
import { PatientController } from '../../../modules/patients/patient.controler.js';
import { PatientService } from '../../../modules/patients/patient.service.js';
import { PatientRepository } from '../../../modules/patients/patient.repository.js';
import { Patient } from '../../../modules/patients/patient.model.js';

const router = Router();
const patientRepository = new PatientRepository(Patient);
const patientService = new PatientService(patientRepository);
const patientController = new PatientController(patientService);

router.get('/doctor/:doctorId/patients', function (req, res) {
    patientController.getPatients(req, res);
});

router.get('/patients/:patientId', function (req, res) {
 patientController.getPatient(req, res)
});

router.post('/patients', function (req, res) {
 patientController.createPatient(req, res)
});

export default router;
