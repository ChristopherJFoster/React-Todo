import React from "react";

function Todo(props) {
  return (
    <div className="task">
      <p className="list-number">{props.listNumber}.&nbsp;</p>
      <p
        completed={props.completed}
        id={props.id}
        onClick={props.toggleCompleted}
      >
        {props.task}
      </p>
    </div>
  );
}

export default Todo;
