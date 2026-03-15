const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// @route   GET /api/tasks
// @desc    Get all tasks
// @access  Public
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server Error fetching tasks' });
  }
});

// @route   POST /api/tasks
// @desc    Create a new task
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;

    // Create a new task instance
    const newTask = new Task({
      title,
      description,
    });

    // Save to database
    const savedTask = await newTask.save();
    res.status(201).json(savedTask); // 201 Created
  } catch (err) {
    res.status(400).json({ message: 'Error creating task', error: err.message });
  }
});

// @route   PUT /api/tasks/:id
// @desc    Update a task (e.g., mark as completed)
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    // Find task by ID and update it. { new: true } returns the updated document.
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: 'Error updating task', error: err.message });
  }
});

// @route   DELETE /api/tasks/:id
// @desc    Delete a task
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting task' });
  }
});

module.exports = router;
