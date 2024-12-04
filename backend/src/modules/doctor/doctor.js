//integracion del sistema de doctores

import { Doctor } from "./doctor.model.js";
import { DoctorRepository } from "./doctor.repository.js";
import { DoctorService } from "./doctor.service.js";
import { DoctorController } from "./doctor.controller.js";

const doctorRepository = new DoctorRepository(Doctor);
const doctorService = new DoctorService(doctorRepository);
const doctorController = new DoctorController(doctorService);

export { Doctor, doctorRepository };