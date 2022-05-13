import React from "react";
import styles from "./inputBox.module.scss";
export default class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <input
        ref={this.inputRef}
        type="text"
        className={styles["input-text"]}
        placeholder="Enter new task for TodoList"
        maxLength={50}
        value={this.props.value}
        onChange={this.props.onChange}
        onKeyPress={this.props.onKeyPress}
      />
    );
  }
}
