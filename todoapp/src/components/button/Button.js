import React from "react";
import styles from "./button.module.scss";
export default class Button extends React.Component {
  render() {
    return (
      <button
        className={styles[this.props.className]}
        onClick={this.props.onClick}
      >
        {this.props.name}
      </button>
    );
  }
}
