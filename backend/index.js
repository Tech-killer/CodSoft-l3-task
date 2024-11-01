import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/tasks.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const DB_URI = process.env.DB_URI;

if (!DB_URI) {
    console.error('Missing DB_URI in environment variables');
    process.exit(1);
}

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.use((_, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use((err, _, res, __) => {
    console.error('Server Error:', err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
