import { Patient } from './patient.model.js';
import { PatientRepository } from './patient.repository.js';

const patientRepository = new PatientRepository(Patient);

export { Patient, patientRepository };