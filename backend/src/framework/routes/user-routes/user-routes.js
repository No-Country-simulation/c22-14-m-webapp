import { Router } from 'express';
import { userController } from '../../../modules/user/user.js';
import { createUserValid } from '../../../common/middlewares/middlewares.js';

const userRoutes = Router();

userRoutes.get('/', (req, res) => userController.getAllUsers(req, res));
userRoutes.get('/doctors', (req, res) => userController.getAllDoctors(req, res));
userRoutes.get('/patients', (req, res) => userController.getPatients(req, res));
userRoutes.get('/:id', (req, res) => userController.getUser(req, res));


userRoutes.post('/register', createUserValid, (req, res) => userController.register(req, res));
userRoutes.post('/login', (req, res) => userController.login(req, res));

export default userRoutes;
