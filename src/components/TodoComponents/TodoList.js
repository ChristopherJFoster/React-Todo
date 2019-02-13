import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = props => {
  return (
    <div>
      <div className="task-list">
        {props.taskList.map(item => (
          <Todo key={item.id} task={item.task} />
        ))}
      </div>
      <TodoForm handleChanges={props.handleChanges} addTask={props.addTask} />
    </div>
  );
};

export default TodoList;
