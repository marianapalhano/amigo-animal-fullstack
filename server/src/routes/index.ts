import { Router } from 'express';
import petRoutes from './pets.routes';
import ngoRoutes from './ngos.routes';
import adopterRoutes from './adopters.routes';

const router = Router();

router.use('/pets', petRoutes);
router.use('/ngos', ngoRoutes);
router.use('/adopters', adopterRoutes);

export default router;