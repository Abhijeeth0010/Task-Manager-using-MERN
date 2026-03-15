import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskUpdated, onTaskDeleted }) => {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks found. Add one above!</p>;
  }

  return (
    <div className="task-list">
      <h2>Your Tasks ({tasks.length})</h2>
      <div className="task-grid">
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onTaskUpdated={onTaskUpdated}
            onTaskDeleted={onTaskDeleted}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
