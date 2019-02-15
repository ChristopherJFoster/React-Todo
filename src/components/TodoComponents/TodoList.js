import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="task-list">
      {props.taskList.map((item, index) => (
        <Todo
          listNumber={index + 1}
          task={item.task}
          // Even though id and key are set to same value, both are required since the key property cannot be accessed:
          id={item.id}
          // toString() is required here to get the boolean for "completed" to be an attribute of each Todo element:
          completed={item.completed.toString()}
          key={item.id}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
