import { Router } from 'express';
import userRoutes from './user-routes/user-routes.js';
import patientsRoutes from './patients-routes/patients-routes.js';
import appointmentRoutes from './appointment-routes/appointment-routes.js';

const apiRoutes = Router();

apiRoutes.use(userRoutes);
apiRoutes.use(patientsRoutes);
apiRoutes.use(appointmentRoutes);


export default apiRoutes;