//integracion del sistema para pacientes

import { Patient } from "./patient.model.js";
import { PatientController } from "./patient.controller.js";
import { PatientService } from "./patient.service.js";
import { PatientRepository } from "./patient.repository.js";

const patientRepository = new PatientRepository(Patient);
const patientService = new PatientService(patientRepository);
const patientController = new PatientController(patientService);

export { patientController };