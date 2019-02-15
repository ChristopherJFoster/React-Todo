import React from "react";

const TodoForm = props => {
  return (
    // I may have trouble later when I try to add a different onClick to the "Clear Completed" button:
    <form onSubmit={props.addTask}>
      <input
        type="text"
        value={props.task}
        name="task"
        onChange={props.handleChanges}
        placeholder="new task"
      />
      <div className="buttons">
        <button className="add-task" type="submit">
          Add Task
        </button>
        <button
          className="clear-completed"
          type="button"
          onClick={props.clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
