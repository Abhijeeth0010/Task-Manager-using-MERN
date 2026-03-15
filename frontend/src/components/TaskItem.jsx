import React from 'react';

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const handleToggleComplete = () => {
    // Send the updated status back up
    onTaskUpdated(task._id, { completed: !task.completed });
  };

  const handleDelete = () => {
    onTaskDeleted(task._id);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <small className="task-date">
          Created: {new Date(task.createdAt).toLocaleDateString()}
        </small>
      </div>
      <div className="task-actions">
        <button 
          onClick={handleToggleComplete} 
          className={`btn-complete ${task.completed ? 'undo' : ''}`}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={handleDelete} className="btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
