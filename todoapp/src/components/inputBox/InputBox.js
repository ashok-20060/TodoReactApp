import React, { useEffect, useRef } from "react";
import styles from "./inputBox.module.scss";
import PropTypes from "prop-types";
import _noop from "lodash/noop";
const InputBox = (props) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <input
      ref={inputRef}
      type="text"
      className={styles["input-text"]}
      placeholder="Enter new task for TodoList"
      maxLength={50}
      value={props.value}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
    />
  );
};
InputBox.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
};
InputBox.defaultProps = {
  className: "",
  value: "",
  onChange: _noop,
  onKeyPress: _noop,
};
export default InputBox;
