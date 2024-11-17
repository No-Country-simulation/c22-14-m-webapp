import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/user', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

export default userRoutes;
