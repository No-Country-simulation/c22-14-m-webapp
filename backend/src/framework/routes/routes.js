import { Router } from 'express';
import userRoutes from './user-routes/user-routes';
import patientRoutes from './patients-routes/patients-routes';


const router = Router();

router.use(userRoutes);
router.use(patientRoutes);

export default router;