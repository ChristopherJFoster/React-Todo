import React from "react";
//import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = props => {
  return (
    <div>
      <TodoForm handleChanges={props.handleChanges} />
    </div>
  );
};

export default TodoList;
