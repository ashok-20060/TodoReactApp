import React from "react";
import styles from "./inputBar.module.scss";
import InputBox from "../inputBox";
import Button from "../button";
export default class InputBar extends React.Component {
  render() {
    return (
      <div className={styles.inputbar}>
        <InputBox
          value={this.props.value}
          onChange={this.props.onChange}
          onKeyPress={this.props.onKeyPress}
        />
        <Button
          name="Add Task"
          className="addtask-btn"
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}
