import express from 'express';
import { getTrafficStatus, getRouteTraffic } from '../controllers/trafficController.js';
const router = express.Router();
router.get('/status', getTrafficStatus);
router.get('/route/:routeId', getRouteTraffic);
export default router;
