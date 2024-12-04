import { Router } from 'express';
import userRoutes from './user-routes/user-routes.js';
import patientsRoutes from './patients-routes/patients-routes.js';
import recordRoutes from './records-routes/records-routes.js';

const apiRoutes = Router();

apiRoutes.use("/user",userRoutes);
apiRoutes.use("/patient",patientsRoutes);
apiRoutes.use("/record",recordRoutes);


export { apiRoutes };