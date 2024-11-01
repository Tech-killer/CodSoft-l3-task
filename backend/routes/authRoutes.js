import express from 'express';
import { login, logout, register, getUserData } from '../controller/authController.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);
router.get('/user', authenticate, getUserData); 

export default router;
