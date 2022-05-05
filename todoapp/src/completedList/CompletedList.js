import React from "react";
import './completedList.css';
import Header from "../header/index";
import Button from "../button/index";
export default class CompletedList extends React.Component{
render(){
    const showcompletedTodoList = this.props.list.length
      ? this.props.list.map((item, index) => {
          return (
              <li key={item}>
                <span>{this.props.list[index]}</span>
              <Button className="deletecompletedbtn" onClick={()=>{this.props.removeCompletedTask(this.props.list[index])}}>deleteCompletedTask</Button>
            </li>
          );
        })
      : "";
    return(
        <div className="completedtasklist">
        <Header>{this.props.children}</Header>
        <ol> {showcompletedTodoList}</ol>
      </div>
    );
}
};