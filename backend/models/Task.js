const mongoose = require('mongoose');

// Define the blueprint for a 'Task' in our database
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title for the task'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false, // Tasks are incomplete by default
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the Task model
module.exports = mongoose.model('Task', taskSchema);
