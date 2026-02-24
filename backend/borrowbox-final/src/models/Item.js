import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for the tool"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// This line is very important for Next.js to prevent "OverwriteModelError"
export default mongoose.models.Item || mongoose.model('Item', ItemSchema);