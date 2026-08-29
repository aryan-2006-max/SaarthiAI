import express from 'express';
import { predictCrowd, predictTraffic, predictDisruption } from '../controllers/predictionController.js';
const router = express.Router();
router.get('/crowd', predictCrowd);
router.get('/traffic', predictTraffic);
router.get('/disruption', predictDisruption);
export default router;
