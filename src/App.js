import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./css/main.css";

// I put this here so I wouldn't have to populate the task list to test code:
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
  constructor() {
    super();
    this.state = {
      taskList: taskList,
      task: ""
    };
  }

  // Handles changes in the form input box:
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Adds a task to the list when a user clicks the "Add Task" button or presses enter:
  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    // Adds the new task to the list and clears the form:
    this.setState({
      taskList: [...this.state.taskList, newTask],
      task: ""
    });
  };

  // Toggles the completed property of the task that was clicked:
  toggleCompleted = e => {
    e.preventDefault();
    // Determines the index of the clicked task object in state based on the id of the clicked task (note that parseInt is needed because by the time id is set to an attribute each task, it is a string, whereas the id stored in state is a number):
    const index = this.state.taskList.findIndex(
      task => task.id === parseInt(e.target.id, 10)
    );
    // From what I can tell, this is required for setting the state of a nested object:
    const tempTaskList = { ...this.state.taskList };
    // Toggles the "completed" property of the appropriate task (now using ! since its a boolean):
    tempTaskList[index].completed = !tempTaskList[index].completed;
    this.setState(tempTaskList);
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      taskList: this.state.taskList.filter(item => !item.completed)
    });
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
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
