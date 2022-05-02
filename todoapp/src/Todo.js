import React from "react";
import "../src/Extra/App.css";
import Header from "./Header";
import Inputbox from "./Inputbox";
import Button from "./Button";
import ActiveList from "./ActiveList";
import CompletedList from "./CompletedList";
import "./Todo.css";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
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
        <Header>MyTodoApp</Header>
        <Inputbox value={this.state.task} onChange={this.onChange} onKeyPress={this.handleKey}/>
        <Button className="addtask-btn" onClick={this.addTask}>Add task</Button>
        <ActiveList list={this.state.todoList} completeTask={this.completeTask} removeTask={this.removeTask} >
          ActiveList
          </ActiveList>
         <CompletedList list={this.state.completedTodoList}  removeCompletedTask={this.removeCompletedTask}>
           CompletedList
           </CompletedList> 
      </div>
    );
  }
}
