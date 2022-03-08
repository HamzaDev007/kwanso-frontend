import * as actions from "../types/task.type.ts";
import { TaskState } from "../reducers/task.reducer.ts";

export function setTask(tasks: TaskState): actions.SetTaskAction {
  return {
    type: actions.UPDATE_TASK,
    tasks
  };
}
