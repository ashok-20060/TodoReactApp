import React from "react";
import styles from "./inputBar.module.scss";
import InputBox from "../inputBox";
import Button from "../button";
import PropTypes from "prop-types";
import _noop from "lodash/noop";

const InputBar = (props) => {
  return (
    <div className={styles.inputbar}>
      <InputBox
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
      />
      <Button name="Add Task" className="addtask-btn" onClick={props.onClick} />
    </div>
  );
};
InputBar.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onClick: PropTypes.func,
};
InputBar.defaultProps = {
  className: "",
  name: "",
  value: "",
  onChange: _noop,
  onKeyPress: _noop,
  onClick: _noop,
};
export default InputBar;
