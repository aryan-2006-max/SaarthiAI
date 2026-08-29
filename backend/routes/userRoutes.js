import express from 'express';
import { getMe, updateMe, getPreferences, updatePreferences, getAccessibilityProfile, updateAccessibilityProfile } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();
router.use(protect);
router.get('/me', getMe);
router.put('/me', updateMe);
router.get('/preferences', getPreferences);
router.put('/preferences', updatePreferences);
router.get('/accessibility', getAccessibilityProfile);
router.put('/accessibility', updateAccessibilityProfile);
export default router;
