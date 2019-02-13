import React from "react";

function Todo(props) {
  return (
    <div className="task">
      <p>{props.task}</p>
    </div>
  );
}

export default Todo;
