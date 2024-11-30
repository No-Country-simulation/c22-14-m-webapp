import { Doctor } from './doctor.model.js';
import { DoctorRepository } from './doctor.repository.js';

const doctorRepository = new DoctorRepository(Doctor);

export { doctorRepository };