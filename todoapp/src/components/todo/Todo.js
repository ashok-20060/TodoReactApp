import React from "react";
import Header from "../header";
import BothLists from "../bothLists";
import InputBar from "../inputBar";
import styles from "./todo.module.scss";
import { connect } from "react-redux";
import {
  addTodo,
  completeTodo,
  removeTodo,
  removeCompletedTodo,
} from "../../redux/actions/actions";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  onChange = (event) => {
    this.setState({
      task: event.target.value,
    });
  };
  handleKey = (event) => {
    if (event.key === "Enter" && this.state.task.length > 0) {
      this.props.addTodo(this.state.task);
      this.removeInputText();
    }
  };
  removeInputText = () => {
    this.setState({
      task: "",
    });
  };

  render() {
    return (
      <div className={styles.todoapp}>
        <Header name="My Todo App" />
        <InputBar
          value={this.state.task}
          onChange={this.onChange}
          onKeyPress={this.handleKey}
          onClick={() => {
            if (this.state.task.length > 0) {
              this.props.addTodo(this.state.task);
              this.removeInputText();
            }
          }}
        />
        <BothLists
          activeList={this.props.todoList}
          completeTask={this.props.completeTodo}
          removeTask={this.props.removeTodo}
          completedList={this.props.completedTodoList}
          removeCompletedTask={this.props.removeCompletedTodo}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todo.todoList,
    completedTodoList: state.todo.completedTodoList,
  };
}
const mapDispatchToProps = {
  addTodo: addTodo,
  completeTodo: completeTodo,
  removeTodo: removeTodo,
  removeCompletedTodo: removeCompletedTodo,
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
