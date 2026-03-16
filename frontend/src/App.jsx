import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'; // Import global styles

// Define the base URL for our backend API
const API_URL = 'https://task-manager-using-mern.onrender.com';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. READ: Fetch all tasks when the component logic first loads
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTasks(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError('Could not load tasks. Make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  // 2. CREATE: Add a new task
  const handleTaskAdded = async (newTaskData) => {
    try {
      const response = await axios.post(API_URL, newTaskData);
      // Update our React state with the newly created task from the server
      setTasks([response.data, ...tasks]);
    } catch (err) {
      console.error('Error adding task:', err);
      setError('Could not add task. Please try again.');
    }
  };

  // 3. UPDATE: Change a task (e.g., mark as completed)
  const handleTaskUpdated = async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);

      // Update the specific task in our React state array
      setTasks(
        tasks.map((task) => (task._id === id ? response.data : task))
      );
    } catch (err) {
      console.error('Error updating task:', err);
      setError('Could not update task.');
    }
  };

  // 4. DELETE: Remove a task
  const handleTaskDeleted = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      // Filter out the deleted task from our React state array
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
      setError('Could not delete task.');
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p>A simple project to learn full-stack development.</p>
      </header>

      <main className="app-main">
        {error && <div className="error-message">{error}</div>}

        <TaskForm onTaskAdded={handleTaskAdded} />

        {loading ? (
          <p className="loading">Loading tasks...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onTaskUpdated={handleTaskUpdated}
            onTaskDeleted={handleTaskDeleted}
          />
        )}
      </main>
    </div>
  );
}

export default App;
