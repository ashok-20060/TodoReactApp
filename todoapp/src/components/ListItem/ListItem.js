import React from "react";
import Button from "../button";
import styles from "./listItem.module.scss";
import PropTypes from "prop-types";
import _noop from "lodash/noop";
const ListItem = (props) => {
  const { text, id } = props.item;
  return (
    <li>
      <span className={styles.spantext}>{text}</span>
      {props.completedListFlag ? (
        <Button
          name="deleteCompletedTask"
          className="deletecompletedbtn"
          onClick={() => {
            props.removeCompletedTask(id);
          }}
        />
      ) : (
        <>
          <Button
            name="Complete"
            className="completebtn"
            onClick={() => props.completeTask(id)}
          />
          <Button
            name="Delete"
            className="deletebtn"
            onClick={() => {
              props.removeTask(id);
            }}
          />
        </>
      )}
    </li>
  );
};
ListItem.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  completeTask: PropTypes.func,
  removeTask: PropTypes.func,
  removeCompletedTask: PropTypes.func,
};
ListItem.defaultProps = {
  text: "",
  id: 0,
  completeTask: _noop,
  removeTask: _noop,
  removeCompletedTask: _noop,
};
export default ListItem;
