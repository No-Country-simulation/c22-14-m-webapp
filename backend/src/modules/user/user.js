import { User } from './user.model.js';
import { UserRepository } from './user.repository.js';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { Patient } from '../patient/patient.js';
import { Doctor } from '../doctor/doctor.js';
import { Admin } from '../admin/admin.js';

const userRepository = new UserRepository(User, Patient, Doctor, Admin);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export { userController };