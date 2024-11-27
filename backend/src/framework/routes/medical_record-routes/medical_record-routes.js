import { Router } from 'express';
import { MedicalRecordController } from '../../../modules/medical_record/medical_record.controller.js';
import { MedicalRecordService } from '../../../modules/medical_record/medical_record.service.js';
import { MedicalRecordRepository } from '../../../modules/medical_record/medical_record.repository.js';
import { MedicalRecord } from '../../../modules/medical_record/medical_record.model.js';

const router = Router();
const medicalRecordRepository = new MedicalRecordRepository(MedicalRecord);
const medicalRecordService = new MedicalRecordService(medicalRecordRepository);
const medicalRecordController = new MedicalRecordController(medicalRecordService);

router.get('/patients/:patientId/medical-records', function (req, res) {
    medicalRecordController.getMedicalRecordsByPatient(req, res);
});

router.get('/medical-records/:recordId', function (req, res) {
    medicalRecordController.getMedicalRecord(req, res);
});

router.post('/medical-records', function (req, res) {
    medicalRecordController.createMedicalRecord(req, res);
});

export default router;
