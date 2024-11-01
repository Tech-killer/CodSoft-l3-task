import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Completed', 'In Complete', 'Pending'], 
    default: 'Pending' 
  },
  deadline: { type: Date, required: true },
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
