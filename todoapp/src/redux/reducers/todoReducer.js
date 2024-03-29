import { ACTION_TYPES } from "../actions/actionTypes";
import _filter from "lodash/filter";
import _find from "lodash/find";

const initialState = {
  todoList: [],
  completedTodoList: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_NEW_TASK:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case ACTION_TYPES.COMPLETE_TASK:
      return {
        ...state,
        completedTodoList: [
          ...state.completedTodoList,
          _find(state.todoList, (data) => data.id === action.payload),
        ],
        todoList: _filter(state.todoList, (item) => item.id !== action.payload),
      };
    case ACTION_TYPES.REMOVE_TASK:
      return {
        ...state,
        todoList: _filter(state.todoList, (item) => item.id !== action.payload),
      };
    case ACTION_TYPES.REMOVE_COMPLETED_TASK:
      return {
        ...state,
        completedTodoList: _filter(
          state.completedTodoList,
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
