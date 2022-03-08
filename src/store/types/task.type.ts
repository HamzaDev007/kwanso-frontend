import { Task } from "../reducers/task.reducer";

export const UPDATE_TASK = "UPDATE_TASK";
export interface SetTaskAction {
  type: typeof UPDATE_TASK;
  tasks: Array<Task>;
}

export type TaskAction =
  | SetTaskAction;
