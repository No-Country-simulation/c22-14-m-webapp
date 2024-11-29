import { Doctor } from './doctor.model.js';
// import { UserService } from './user.service.js';
// import { UserController } from './user.controller.js';
import { DoctorRepository } from './doctor.repository.js';

const doctorRepository = new DoctorRepository(Doctor);
// const userService = new UserService(userRepository);
// const userController = new UserController(userService);

export { doctorRepository };