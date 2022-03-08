import * as actions from "../types/task.type.ts";

export interface Task {
 id: string,
 name: string
}

export interface TaskState {
  tasks: Array<Task>;
}

const initialState: TaskState = {
 tasks: []
};

export default function taskReducer(
  state: TaskState = initialState,
  action: actions.SetTaskAction
): TaskState {
  switch (action.type) {
    case actions.UPDATE_TASK:
      return {
       ...initialState,
       tasks: action.tasks
      };
    default:
      return state;
  }
}
