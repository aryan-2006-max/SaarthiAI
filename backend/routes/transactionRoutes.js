import express from 'express';
import { getTransactions, getTransactionSummary } from '../controllers/transactionController.js';
import { protect } from '../middleware/auth.js';
const router = express.Router();
router.use(protect);
router.get('/', getTransactions);
router.get('/summary', getTransactionSummary);
export default router;
