import { Router } from 'express';
import userRoutes from './user-routes/user-routes.js';
import patientsRoutes from './patients-routes/patients-routes.js';
import doctorsRoutes from './doctors-routes/doctors-routes.js';
import appointmentRoutes from './appointment-routes/appointment-routes.js';
import medicalHistory from './medicalHistory-routes/medicalHistory-routes.js';

const apiRoutes = Router();

apiRoutes.use("/user",userRoutes);
apiRoutes.use("/patient",patientsRoutes);
apiRoutes.use("/doctors",doctorsRoutes);
apiRoutes.use("/appointments",appointmentRoutes);
apiRoutes.use("/medicalHistory", medicalHistory);


export { apiRoutes };