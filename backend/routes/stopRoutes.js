import express from 'express';
import { getStops, getStop, getNearbyStops } from '../controllers/stopController.js';
const router = express.Router();
router.get('/', getStops);
router.get('/nearby', getNearbyStops);
router.get('/:id', getStop);
export default router;
