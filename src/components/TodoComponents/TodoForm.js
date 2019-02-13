import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.addTask}>
      <input
        type="text"
        value={props.task}
        name="task"
        onChange={props.handleChanges}
        placeholder="new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
