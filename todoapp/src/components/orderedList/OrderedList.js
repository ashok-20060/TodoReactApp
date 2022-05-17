import React from "react";
import _map from "lodash/map";
import styles from "./orderedList.module.scss";
import PropTypes from "prop-types";
import ListItem from "../ListItem";
import _noop from "lodash/noop";
const OrderedList = (props) => {
  return (
    <ol className={styles.olClass}>
      {_map(props.list, (item, index) => {
        return (
          <ListItem
            key={item.id}
            item={item}
            completedListFlag={props.completedListFlag}
            removeCompletedTask={props.removeCompletedTask}
            completeTask={props.completeTask}
            removeTask={props.removeTask}
          />
        );
      })}
    </ol>
  );
};
OrderedList.propTypes = {
  list: PropTypes.array,
  completeTask: PropTypes.func,
  removeTask: PropTypes.func,
  removeCompletedTask: PropTypes.func,
  completedListFlag: PropTypes.bool,
};
OrderedList.defaultProps = {
  list: [],
  completeTask: _noop,
  removeTask: _noop,
  removeCompletedTask: _noop,
  completedListFlag: false,
};

export default OrderedList;
