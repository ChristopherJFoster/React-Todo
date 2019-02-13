import React from "react";

function Todo(props) {
  return (
    <div className="task" onClick={props.markCompleted}>
      <p>{props.task}</p>
    </div>
  );
}

export default Todo;
