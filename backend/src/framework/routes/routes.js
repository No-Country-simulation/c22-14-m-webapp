import { Router } from 'express';
import userRoutes from './user-routes/user-routes.js';
import patientsRoutes from './patients-routes/patients-routes.js';
import medicalHistoryRoutes from './medicalHistory-routes/medicalHistory-routes.js';

const apiRoutes = Router();

apiRoutes.use("/user",userRoutes);
apiRoutes.use("/patient",patientsRoutes);
apiRoutes.use("/medicalHistory",medicalHistoryRoutes);


export { apiRoutes };