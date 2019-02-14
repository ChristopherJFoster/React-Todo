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
      <button type="submit">Add Task</button>
      <button type="button">Clear Completed</button>
    </form>
  );
};

export default TodoForm;
