import React from "react";
import styles from "./completedList.module.scss";
import Header from "../header";
import OrderedList from "../orderedList";
import PropTypes from 'prop-types';
export default class CompletedList extends React.Component {
  render() {
    return (
      <div className={styles.completedtasklist}>
        <Header name={this.props.name} />
        <OrderedList
          list={this.props.completedList}
          removeCompletedTask={this.props.removeCompletedTask}
          completedListFlag={true}
        />
      </div>
    );
  }
}
CompletedList.protoTypes={
  name:PropTypes.string,
  completedList:PropTypes.array,
  removeCompletedTask:PropTypes.func,
}