import { Router } from 'express';
import userRoutes from './user-routes/user-routes.js';
import patientsRoutes from './patients-routes/patients-routes.js';
import medicalHistoryRouter from './medicalHistory-routes/medicalHistory-routes.js';

const apiRoutes = Router();

apiRoutes.use(userRoutes);
apiRoutes.use(patientsRoutes);
apiRoutes.use(medicalHistoryRouter);

export default apiRoutes;