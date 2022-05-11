import React from "react";
import styles from "./activeList.module.scss";
import Header from "../header";
import OrderedList from "../orderedList";
export default class ActiveList extends React.Component {
  render() {
    return (
      <div className={styles.tasklist}>
        <Header name={this.props.name} />
        <OrderedList
          list={this.props.activeList}
          completeTask={this.props.completeTask}
          removeTask={this.props.removeTask}
        />
      </div>
    );
  }
}
