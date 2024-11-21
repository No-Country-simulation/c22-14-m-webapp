import { Router } from 'express';
import userRoutes from './user-routes/user-routes';
import patientsRoutes from './patient-routes/patient-routes';

const apiRoutes = Router();

apiRoutes.use(userRoutes);
apiRoutes.use(patientsRoutes);

export default apiRoutes;