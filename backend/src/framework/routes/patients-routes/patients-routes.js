import { Router } from 'express';
import { patientController } from '../../../modules/patient/patients.js';

const router = Router();

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
