import { Router } from 'express';
import userRoutes from './user-routes/user-routes.js';
import patientsRoutes from './patients-routes/patients-routes.js';
import recordRoutes from './records-routes/records-routes.js';
import doctorsRoutes from './doctors-routes/doctors-routes.js';

const apiRoutes = Router();

apiRoutes.use("/user",userRoutes);
apiRoutes.use("/patient",patientsRoutes);
apiRoutes.use("/record",recordRoutes);
apiRoutes.use("/doctors",doctorsRoutes); 


export { apiRoutes };