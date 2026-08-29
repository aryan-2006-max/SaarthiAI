import express from 'express';
import { getWallet, addMoney, getSpending } from '../controllers/walletController.js';
import { protect } from '../middleware/auth.js';
const router = express.Router();
router.use(protect);
router.get('/', getWallet);
router.post('/add', addMoney);
router.get('/spending', getSpending);
export default router;
