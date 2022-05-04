import React from "react";
import "../ignoreFiles/App.css";
import Header from "../header/index";
import Inputbox from "../inputBox/index";
import Button from "../button/index";
import ActiveList from "../activeList/index";
import CompletedList from "../completedList/index";
import "./todo.css";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      todoList: [],
      completedTodoList: [],
    };

    this.completeTask = (item) => {
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

  onChange=(event) => {
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
    return (
      <div>
        <Header>My Todo App</Header>
        <div className="inputbar">
        <Inputbox value={this.state.task} onChange={this.onChange} onKeyPress={this.handleKey}/>
        <Button className="addtask-btn" onClick={this.addTask}>Add task</Button>
        </div>
        <ActiveList list={this.state.todoList} completeTask={this.completeTask} removeTask={this.removeTask} >
          Active List
          </ActiveList>
         <CompletedList list={this.state.completedTodoList}  removeCompletedTask={this.removeCompletedTask}>
           Completed List
           </CompletedList> 
      </div>
    );
  }
}
