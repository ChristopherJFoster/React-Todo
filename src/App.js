import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const taskList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: taskList,
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

  toggleCompleted = e => {
    e.preventDefault();
    // const result = this.state.taskList.filter(
    //   task => task.id === parseInt(e.target.id, 10)
    // );
    const index = this.state.taskList.findIndex(
      task => task.id === parseInt(e.target.id, 10)
    );

    const taskList = { ...this.state.taskList };
    taskList[index].completed = true;
    //this.setState({ taskList });

    console.log(this.state.taskList[index].completed);

    // if (this.state.taskList[index].completed === false) {
    //   this.setState({
    //     [taskList[index].completed]: true
    //   });
    // } else {
    //   this.setState({
    //     [taskList[index].completed]: false
    //   });
    // }

    console.log(this.state.taskList[index].completed);
  };

  render() {
    return (
      <div className="container">
        <TodoList
          taskList={this.state.taskList}
          toggleCompleted={this.toggleCompleted}
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
