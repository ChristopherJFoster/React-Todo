import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: [],
      task: ""
    };
  }

  handleChanges = e => {
    console.log(`handleChanges: ${e.target.value}`);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      taskList: [...this.state.taskList, newTask],
      task: ""
    });
  };

  render() {
    return (
      <div className="container">
        <TodoList taskList={this.state.taskList} />
        <TodoForm
          task={this.state.task}
          handleChanges={this.handleChanges}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
