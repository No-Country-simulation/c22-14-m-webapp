import { Router } from 'express';
import { userController } from '../../../modules/user/user.js';
import { createUserValid } from '../../../common/middlewares/middlewares.js';

const userRoutes = Router();

userRoutes.post('/register', createUserValid, (req, res) => userController.register(req, res));
userRoutes.post('/login', (req, res) => userController.login(req, res));

export default userRoutes;
