import React from "react";

function Todo(props) {
  return (
    <div className="task" onClick={props.toggleCompleted}>
      <p completed={props.completed} id={props.id}>
        {props.task}
      </p>
    </div>
  );
}

export default Todo;
