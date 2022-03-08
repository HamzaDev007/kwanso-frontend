import { combineReducers } from "redux";
import taskReducer from "./task.reducer.ts";

const rootReducer = combineReducers({
  tasks: taskReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
