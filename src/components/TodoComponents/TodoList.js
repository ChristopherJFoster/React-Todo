import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="task-list">
      {props.taskList.map(item => (
        <Todo
          id={item.id}
          key={item.id}
          task={item.task}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
