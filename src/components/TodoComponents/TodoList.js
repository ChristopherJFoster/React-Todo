import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="task-list">
      {props.taskList.map(item => (
        <Todo
          task={item.task}
          id={item.id}
          completed={item.completed.toString()}
          key={item.id}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
