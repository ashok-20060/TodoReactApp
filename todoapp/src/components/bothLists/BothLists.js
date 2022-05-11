import React from "react";
import styles from "./bothLists.module.scss";
import ActiveList from "../activeList";
import CompletedList from "../completedList";
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
