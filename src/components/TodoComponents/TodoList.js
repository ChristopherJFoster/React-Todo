import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="task-list">
      {props.taskList.map(item => (
        <Todo key={item.id} task={item.task} />
      ))}
    </div>
  );
};

export default TodoList;
