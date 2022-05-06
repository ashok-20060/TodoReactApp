import React from "react";
// import './inputBox.css';
import styles from './inputBox.module.scss';
export default class InputBox extends React.Component{
render(){
    return(
        <input
         type="text"
         className={styles['input-text']}
         placeholder="Enter new task for TodoList"
         maxLength={50}
         value={this.props.value}
          onChange={this.props.onChange}
          onKeyPress={this.props.onKeyPress}
       />
    );
}
};