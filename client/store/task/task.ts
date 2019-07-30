import { Action as ReduxAction } from 'redux';
import { ThunkAction, ThunkDispatch, StateApp } from 'client/types/reducer';
import { Task, TaskStatus } from 'client/types/task';
import NameSpace from 'client/store/name-space';

enum ActionType {
  SET_TASKS = 'SET_TASKS',
  SET_TASK_STATUS = 'SET_TASK_STATUS',
  INC_TASK_QUANTITY = 'INC_TASK_QUA',
  INC_TASK_STATUS_QUANTITY = 'INC_TASK_STATUS_QUA',
}
export interface State {
  tasks: Task[];
  taskQuantity: number;
  taskStatus: TaskStatus[];
  taskStatusQuantity: number;
}
interface SetTasks extends ReduxAction {
  payload: Task[];
  type: ActionType.SET_TASKS;
}
interface SetTaskStatus extends ReduxAction {
  payload: TaskStatus[];
  type: ActionType.SET_TASK_STATUS;
}
interface IncrementTaskQuantity extends ReduxAction {
  payload: number;
  type: ActionType.INC_TASK_QUANTITY;
}
interface IncrementTaskStatusQuantity extends ReduxAction {
  payload: number;
  type: ActionType.INC_TASK_STATUS_QUANTITY;
}

export type Action = SetTasks | SetTaskStatus | IncrementTaskQuantity | IncrementTaskStatusQuantity;

const initialState: State = {
  tasks: [],
  taskQuantity: 0,
  taskStatus: [],
  taskStatusQuantity: 0,
};

const ActionCreator = {
  setTasks: (value: Task[]): SetTasks => ({
    payload: value,
    type: ActionType.SET_TASKS,
  }),
  setTaskStatus: (value: TaskStatus[]): SetTaskStatus => ({
    payload: value,
    type: ActionType.SET_TASK_STATUS,
  }),
  incTaskQuantity: (value: number = 1): IncrementTaskQuantity => ({
    payload: value,
    type: ActionType.INC_TASK_QUANTITY,
  }),
  incTaskStatusQuantity: (value: number = 1): IncrementTaskStatusQuantity => ({
    payload: value,
    type: ActionType.INC_TASK_STATUS_QUANTITY,
  }),
};

const Operation = {
  // eslint-disable-next-line max-len
  addTask: (task: Task): ThunkAction => (dispatch: ThunkDispatch, getState: () => StateApp): Promise<void> => Promise.resolve(true).then(
    (): void => {
      const tasksNew = getState()[NameSpace.TASK].tasks.slice(0);
      const id = getState()[NameSpace.TASK].taskQuantity;
      const taskNew = { ...task, id: (id + 1).toString() };
      tasksNew.push(taskNew);
      dispatch(ActionCreator.setTasks(tasksNew));
      dispatch(ActionCreator.incTaskQuantity());
    },
  ),
  // eslint-disable-next-line max-len
  addTaskStatus: (taskStatus: TaskStatus): ThunkAction => (dispatch: ThunkDispatch, getState: () => StateApp): Promise<void> => Promise.resolve(true).then(
    (): void => {
      const tasksStatusNew = getState()[NameSpace.TASK].taskStatus.slice(0);
      const id = getState()[NameSpace.TASK].taskStatusQuantity;
      const taskStatusNew = { ...taskStatus, id: (id + 1).toString() };
      tasksStatusNew.push(taskStatusNew);
      dispatch(ActionCreator.setTaskStatus(tasksStatusNew));
      dispatch(ActionCreator.incTaskStatusQuantity());
    },
  ),
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_TASKS:
      return { ...state, tasks: action.payload };
    case ActionType.SET_TASK_STATUS:
      return { ...state, taskStatus: action.payload };
    case ActionType.INC_TASK_QUANTITY:
      return { ...state, taskQuantity: state.taskQuantity + action.payload };
    case ActionType.INC_TASK_STATUS_QUANTITY:
      return { ...state, taskStatusQuantity: state.taskStatusQuantity + action.payload };
    default:
      return state;
  }
};

export {
  initialState, ActionCreator, ActionType, reducer, Operation,
};
