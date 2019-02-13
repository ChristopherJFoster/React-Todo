import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const taskList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: taskList,
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

    console.log(newTask);
    console.log(`state taskList: ${this.state.taskList}`);

    this.setState({
      taskList: [...this.state.taskList, newTask],
      task: ""
    });
  };

  render() {
    console.log(`state task: ${this.state.task}`);
    return (
      <div className="container">
        <TodoList taskList={this.state.taskList} />
        <TodoForm
          taskList={this.state.taskList}
          handleChanges={this.handleChanges}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
