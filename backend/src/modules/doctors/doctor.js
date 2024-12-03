//integracion del sistema de doctores

import { Doctor } from "./doctor.model";
import { DoctorRepository } from "./doctor.repository";
import { DoctorService } from "./doctor.service";
import { DoctorController } from "./doctor.controller";

const doctorRepository = new DoctorRepository(Doctor);
const doctorService = new DoctorService(doctorRepository);
const doctorController = new DoctorController(doctorService);

export { doctorController };