import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./css/main.css";

class App extends React.Component {
  constructor() {
    super();
    // Retrieved stringified state object from localStorage (if any):
    const retrievedState = localStorage.getItem("storedState");
    // Parses state object back to its original formatting:
    const parsedState = JSON.parse(retrievedState);
    // Uses state object from localStorage if there is one. If not uses a default state object:
    parsedState
      ? (this.state = parsedState)
      : (this.state = {
          taskList: [],
          task: ""
        });
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
    // User cannot add an empty string to the to-do list:
    if (!this.state.task) {
      alert(
        `If you want to do nothing, just do nothing.\nDon't add "nothing" to your to-do list.`
      );
      return;
    }
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
    // Stringifies state and stores it in localStorage on each render. This almost ensures that the stored state will match whatever the state was when the page/app was closed, power went out...:
    let storedState = this.state;
    localStorage.setItem("storedState", JSON.stringify(storedState));
    return (
      <div className="container">
        <h1>To-Do List</h1>
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
