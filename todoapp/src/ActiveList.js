import React from "react";
import './ActiveList.css';
import Header from "./Header";
import Button from "./Button";
export default class ActiveList extends React.Component{
render(){
    const showtodoList = this.props.list.length
      ? this.props.list.map((item, index) => {
          return (
              <li key={item}>
              <span>{this.props.list[index]}</span>
              <Button className="completebtn" onClick={() => this.props.completeTask(this.props.list[index])}>Complete</Button>
              <Button  onClick={()=>{this.props.removeTask(this.props.list[index])}}>Delete</Button>
               </li> 
          );
        })
      : "";
    return(
        <div className="tasklist">
        <Header>{this.props.children}</Header>
        <ol> {showtodoList}</ol>
      </div>
    );
}
};