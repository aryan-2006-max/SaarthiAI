import express from 'express';
import { getCard, freezeCard, unfreezeCard } from '../controllers/cardController.js';
import { protect } from '../middleware/auth.js';
const router = express.Router();
router.use(protect);
router.get('/', getCard);
router.put('/freeze', freezeCard);
router.put('/unfreeze', unfreezeCard);
export default router;
