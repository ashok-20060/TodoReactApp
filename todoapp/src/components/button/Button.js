import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";
import _noop from "lodash/noop";

const Button = (props) => {
  return (
    <button className={styles[props.className]} onClick={props.onClick}>
      {props.name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
Button.defaultProps = {
  onClick: _noop,
  className: "",
};
export default Button;
