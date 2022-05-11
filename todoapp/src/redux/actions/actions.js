import { ACTION_TYPES } from "./actionTypes";

export const addTodo = (task) => (dispatch) =>
  dispatch({
    type: ACTION_TYPES.ADD_NEW_TASK,
    payload: task,
  });
export const completeTodo = (completdTask) => (dispatch) =>
  dispatch({
    type: ACTION_TYPES.COMPLETE_TASK,
    payload: completdTask,
  });
export const removeTodo = (removeTask) => (dispatch) =>
  dispatch({
    type: ACTION_TYPES.REMOVE_TASK,
    payload: removeTask,
  });
export const removeCompletedTodo = (removeCompletedTask) => (dispatch) =>
  dispatch({
    type: ACTION_TYPES.REMOVE_COMPLETED_TASK,
    payload: removeCompletedTask,
  });
