import express from 'express';
import { getRouteCrowd, getStopCrowd, getVehicleCrowd, getBoardingRecommendation } from '../controllers/crowdController.js';
const router = express.Router();
router.get('/route/:id', getRouteCrowd);
router.get('/stop/:id', getStopCrowd);
router.get('/vehicle/:id', getVehicleCrowd);
router.get('/recommendation', getBoardingRecommendation);
export default router;
