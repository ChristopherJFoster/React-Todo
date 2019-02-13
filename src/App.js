import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: [],
      task: ""
    };
  }

  handleChanges = e => {
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

  // SYNTAX??
  markCompleted = e => {
    e.preventDefault();
    console.log("test");
    if (e.target.completed === false) {
      this.setState({
        [e.target.completed]: true
      });
    } else {
      this.setState({
        [e.target.completed]: false
      });
    }
  };

  render() {
    return (
      <div className="container">
        <TodoList
          taskList={this.state.taskList}
          markCompleted={this.markCompleted}
        />
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
