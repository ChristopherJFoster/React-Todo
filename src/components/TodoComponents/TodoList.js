import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="task-list">
      {props.taskList.map(item => (
        <Todo
          key={item.id}
          task={item.task}
          markCompleted={props.markCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
