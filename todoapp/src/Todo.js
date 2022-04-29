import React from "react";
import "../src/Extra/App.css";
import "./Todo.css";

export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      todoList: [],
      completedTodoList: [],
    };

    this.completeTask = (item) => {
      //console.log(item);
      let index = this.state.todoList.indexOf(item);
      let newList = this.state.todoList;
      let completedTask = newList[index];
      newList.splice(index, 1);
      this.setState({
        todoList: newList,
        completedTodoList: [...this.state.completedTodoList, completedTask],
      });
    };
    this.removeTask = (item) => {
      let index = this.state.todoList.indexOf(item);
      let newList = this.state.todoList;
      newList.splice(index, 1);
      this.setState({
        todoList: newList,
      });
    };
    this.removeCompletedTask = (completdTask) => {
      let idx = this.state.completedTodoList.indexOf(completdTask);
      let updatedList = this.state.completedTodoList;
      updatedList.splice(idx, 1);
      this.setState({
        completedTodoList: updatedList,
      });
    };
    this.addTask=()=>{
      this.setState({
        todoList: [...this.state.todoList, this.state.task],
        task: "",
      });
    };
  }

  onChange = (event) => {
    this.setState({
      task: event.target.value,
    });
   // console.log("task", this.state.task);
  };
  handleKey=(event)=>{
    if(event.key === 'Enter'){
      this.addTask();
    }
  }


  render() {
    const showtodoList = this.state.todoList.length
      ? this.state.todoList.map((item, index) => {
          return (
              <li key={item}>
              <span>{this.state.todoList[index]}</span>
              <button
              className="completebtn"
                onClick={() => this.completeTask(this.state.todoList[index])}
              >
                Complete
              </button>
              <button
                onClick={() => this.removeTask(this.state.todoList[index])}
              >
                delete
              </button>
              </li>
          );
        })
      : "";

    const showcompletedTodoList = this.state.completedTodoList.length
      ? this.state.completedTodoList.map((item, index) => {
          return (
              <li key={item}>
                <span>{this.state.completedTodoList[index]}</span>
              <button
                onClick={() =>
                  this.removeCompletedTask(this.state.completedTodoList[index])
                }
              >
                deleteCompletedTask
              </button>
            </li>
          );
        })
      : "";

    return (
      <div>
        <h1 className="titleHeading">MyTodoApp</h1>
        <div className="todolist-bar">
          <input
           type="text"
           className="input-text"
           placeholder="Enter new task for TodoList"
           maxLength={50}
           value={this.state.task}
            onChange={this.onChange}
            onKeyPress={this.handleKey}
         />
         <button className="addtask-btn" onClick={this.addTask}>Add task</button>
        </div>
        <div className="shownlists">
          <div className="tasklist">
            <h2>TodoList</h2>
            <ol> {showtodoList}</ol>
          </div>
          <div className="Completed-list">
           <h2>Completed List</h2>
           <ol>{showcompletedTodoList}</ol>
         </div>
        </div>
      </div>
    );
  }
}
