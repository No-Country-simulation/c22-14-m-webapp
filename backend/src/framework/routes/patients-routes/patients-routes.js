import { Router } from 'express';
import { patientController } from '../../../modules/patient/patient.js';

const router = Router();

router.get('/doctor/:doctorId/patients', function (req, res) {
    patientController.getPatients(req, res);
});

router.get('/patients/:patientId', function (req, res) {
 patientController.getPatient(req, res)
});

export default router;
