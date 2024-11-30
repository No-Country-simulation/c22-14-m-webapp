import { Router } from 'express';
import userRoutes from './user-routes/user-routes.js';

const apiRoutes = Router();

apiRoutes.use("/user", userRoutes);


export { apiRoutes };