import React from "react";
import styles from "./bothLists.module.scss";
import ActiveList from "../activeList";
import CompletedList from "../completedList";
import PropTypes from "prop-types";
import _noop from "lodash/noop";
const BothLists = (props) => {
  return (
    <div className={styles.lists}>
      <ActiveList
        name="Active List"
        activeList={props.activeList}
        completeTask={props.completeTask}
        removeTask={props.removeTask}
      />
      <CompletedList
        name="Completed List"
        completedList={props.completedList}
        removeCompletedTask={props.removeCompletedTask}
      />
    </div>
  );
};

BothLists.protoTypes = {
  activeList: PropTypes.array.isRequired,
  completedList: PropTypes.array.isRequired,
  completeTask: PropTypes.func,
  removeTask: PropTypes.func,
  removeCompletedTask: PropTypes.func,
};
BothLists.defaultProps = {
  completeTask: _noop,
  removeTask: _noop,
  removeCompletedTask: _noop,
};
export default BothLists;
