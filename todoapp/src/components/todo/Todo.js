import React, { useState } from "react";
import Header from "../header";
import BothLists from "../bothLists";
import InputBar from "../inputBar";
import styles from "./todo.module.scss";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import _noop from "lodash/noop";
import {
  addTodo,
  completeTodo,
  removeTodo,
  removeCompletedTodo,
} from "../../redux/actions/actions";
const Todo = (props) => {
  const [task, setTask] = useState("");
  const todoList = useSelector((state) => state.todo.todoList);
  const completedTodoList = useSelector(
    (state) => state.todo.completedTodoList
  );

  const onChangeText = (event) => {
    setTask(event.target.value);
  };
  const handleKey = (event) => {
    if (event.key === "Enter" && task.length > 0) {
      props.addTodo({ text: task, id: Math.floor(Math.random() * 1000) });
      setTask("");
    }
  };
  return (
    <div className={styles.todoapp}>
      <Header name="My Todo App" />
      <InputBar
        value={task}
        onChange={onChangeText}
        onKeyPress={handleKey}
        onClick={() => {
          if (task.length > 0) {
            props.addTodo({ text: task, id: Math.floor(Math.random() * 1000) });
            setTask("");
          }
        }}
      />
      <BothLists
        activeList={todoList}
        completeTask={props.completeTodo}
        removeTask={props.removeTodo}
        completedList={completedTodoList}
        removeCompletedTask={props.removeCompletedTodo}
      />
    </div>
  );
};

Todo.propTypes = {
  todoList: PropTypes.array,
  completedTodoList: PropTypes.array,
  addTodo: PropTypes.func,
  completeTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  removeCompletedTodo: PropTypes.func,
};
Todo.defaultProps = {
  todoList: [],
  completedTodoList: [],
  addTodo: _noop,
  completeTodo: _noop,
  removeTodo: _noop,
  removeCompletedTodo: _noop,
};
const mapDispatchToProps = {
  addTodo: addTodo,
  completeTodo: completeTodo,
  removeTodo: removeTodo,
  removeCompletedTodo: removeCompletedTodo,
};
export default connect(null, mapDispatchToProps)(Todo);
