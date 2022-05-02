import React from "react";
import './CompletedList.css';
import Header from "./Header";
import Button from "./Button";
export default class CompletedList extends React.Component{
render(){
    const showcompletedTodoList = this.props.list.length
      ? this.props.list.map((item, index) => {
          return (
              <li key={item}>
                <span>{this.props.list[index]}</span>
              <Button  onClick={()=>{this.props.removeCompletedTask(this.props.list[index])}}>deleteCompletedTask</Button>
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