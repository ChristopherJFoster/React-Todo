import React from "react";

function Todo(props) {
  return (
    <div className="task">
      <p>{props.Todo.task}</p>
    </div>
  );
}

export default Todo;
