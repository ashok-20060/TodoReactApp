import React from "react";
import styles from "./completedList.module.scss";
import Header from "../header";
import OrderedList from "../orderedList";
import PropTypes from "prop-types";
import _noop from "lodash/noop";

const CompletedList = (props) => {
  return (
    <div className={styles.completedtasklist}>
      <Header name={props.name} />
      <OrderedList
        list={props.completedList}
        removeCompletedTask={props.removeCompletedTask}
        completedListFlag={true}
      />
    </div>
  );
};
CompletedList.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  completedList: PropTypes.array,
  removeCompletedTask: PropTypes.func,
  completedListFlag: PropTypes.bool,
};
CompletedList.defaultProps = {
  className: "",
  completedList: [],
  removeCompletedTask: _noop,
  completedListFlag: false,
};
export default CompletedList;
