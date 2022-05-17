import { ACTION_TYPES } from "./actionTypes";

export const addTodo = (task) => (dispatch) =>
  dispatch({
    type: ACTION_TYPES.ADD_NEW_TASK,
    payload: task,
  });
export const completeTodo = (id) => (dispatch) =>
  dispatch({
    type: ACTION_TYPES.COMPLETE_TASK,
    payload: id,
  });
export const removeTodo = (id) => (dispatch) =>
  dispatch({
    type: ACTION_TYPES.REMOVE_TASK,
    payload: id,
  });
export const removeCompletedTodo = (id) => (dispatch) =>
  dispatch({
    type: ACTION_TYPES.REMOVE_COMPLETED_TASK,
    payload: id,
  });
