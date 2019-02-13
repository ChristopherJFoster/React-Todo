import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.addTodoItem}>
      <input
        type="text"
        value={props.todoTask}
        name="todoItem"
        onChange={props.handleChanges}
        placeholder="new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
