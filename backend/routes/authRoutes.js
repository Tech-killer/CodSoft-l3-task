import express from 'express';
import { login, logout, register, getUserData } from '../controller/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register); 
router.get('/user', getUserData);  

export default router;
