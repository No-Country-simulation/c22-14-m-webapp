//integracion del sistema para pacientes

import { Patient } from "./patient.model";
import { PatientController } from "./patient.controller";
import { PatientService } from "./patient.service";
import { PatientRepository } from "./patient.repository";

const patientRepository = new PatientRepository(Patient);
const patientService = new PatientService(patientRepository);
const patientController = new PatientController(patientService);

export { patientController };