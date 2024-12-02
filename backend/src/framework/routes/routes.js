import { Router } from 'express';
import userRoutes from './user-routes/user-routes.js';
import patientsRoutes from './patients-routes/patients-routes.js';
import medicalHistoryRoutes from './medicalHistory-routes/medicalHistory-routes.js';

const apiRoutes = Router();

apiRoutes.use(userRoutes);
apiRoutes.use(patientsRoutes);
apiRoutes.use(medicalHistoryRoutes);

export default apiRoutes;