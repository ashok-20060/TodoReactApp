import React from "react";
import PropTypes from 'prop-types';
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
Button.propTypes={
    name:PropTypes.string,
    onClick:PropTypes.func,
    className:PropTypes.string,
}
