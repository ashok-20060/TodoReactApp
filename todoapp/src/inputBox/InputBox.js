import React from "react";
import './inputBox.css';
export default class Inputbox extends React.Component{
render(){
    return(
        <input
         type="text"
         className="input-text"
         placeholder="Enter new task for TodoList"
         maxLength={50}
         value={this.props.value}
          onChange={this.props.onChange}
          onKeyPress={this.props.onKeyPress}
       />
    );
}
};