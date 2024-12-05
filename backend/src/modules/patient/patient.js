import { PatientController } from './patient.controller.js';
import { Patient } from './patient.model.js';
import { PatientRepository } from './patient.repository.js';
import { PatientService } from './patient.service.js';

const patientRepository = new PatientRepository(Patient);
const patientService = new PatientService(patientRepository);
const patientController = new PatientController(patientService);

export { Patient, patientRepository, patientController };