import express from 'express';
import { getRoutes, getRoute, createRoute, updateRoute, searchRoutes } from '../controllers/routeController.js';
import { protect } from '../middleware/auth.js';
import { authorize } from '../middleware/roleAuth.js';

const router = express.Router();
router.get('/', getRoutes);
router.get('/search', searchRoutes);
router.get('/:id', getRoute);
router.post('/', protect, authorize('operator', 'admin'), createRoute);
router.put('/:id', protect, authorize('operator', 'admin'), updateRoute);
export default router;
