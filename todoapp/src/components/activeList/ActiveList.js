import React from "react";
import styles from "./activeList.module.scss";
import Header from "../header";
import OrderedList from "../orderedList";
import PropTypes from "prop-types";
import _noop from "lodash/noop";

const ActiveList = (props) => {
  return (
    <div className={styles.tasklist}>
      <Header name={props.name} />
      <OrderedList
        list={props.activeList}
        completeTask={props.completeTask}
        removeTask={props.removeTask}
      />
    </div>
  );
};
ActiveList.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  activeList: PropTypes.array,
  completeTask: PropTypes.func,
  removeTask: PropTypes.func,
};
ActiveList.defaultProps = {
  className: "",
  activeList: [],
  completeTask: _noop,
  removeTask: _noop,
};
export default ActiveList;
