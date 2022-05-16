import React from "react";
import styles from "./bothLists.module.scss";
import ActiveList from "../activeList";
import CompletedList from "../completedList";
import PropTypes from 'prop-types';
export default class BothLists extends React.Component {
  render() {
    return (
      <div className={styles.lists}>
        <ActiveList
          name="Active List"
          activeList={this.props.activeList}
          completeTask={this.props.completeTask}
          removeTask={this.props.removeTask}
        />
        <CompletedList
          name="Completed List"
          completedList={this.props.completedList}
          removeCompletedTask={this.props.removeCompletedTask}
        />
      </div>
    );
  }
}

BothLists.protoTypes={
  activeList:PropTypes.array,
  completedList:PropTypes.array,
  completeTask:PropTypes.func,
  removeTask:PropTypes.func,
  removeCompletedTask:PropTypes.func,
}

