import { combineReducers } from "redux";
import todoListsReducer from "./todoLists";

const rootReducer = combineReducers({
  todoLists: todoListsReducer,
});

export default rootReducer;
