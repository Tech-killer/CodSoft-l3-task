import User from '../models/user.js';
import jwt from 'jsonwebtoken';

const getUserData = async (req, res) => {
    try {
        const userId = req.user._id; 
        const user = await User.findById(userId).select('-password');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data', error });
    }
};

export { register, login, logout, getUserData };
