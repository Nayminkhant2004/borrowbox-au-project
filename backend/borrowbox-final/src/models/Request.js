import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema({
  toolName: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    default: "Pending" 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

export default mongoose.models.Request || mongoose.model('Request', RequestSchema);