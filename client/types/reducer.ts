import { ThunkAction as ReduxThunkAction, ThunkDispatch as ReduxThunkDispatch } from 'redux-thunk';
import { Action as ActionCondition, State as StateCondition } from 'client/store/condition/condition';
import NameSpace from 'client/store/name-space';
import { Action as ActionTime, State as StateTime } from 'client/store/time/time';
import { Action as ActionTask, State as StateTask } from 'client/store/task/task';

export interface StateApp {
  [NameSpace.CONDITION]: StateCondition;
  [NameSpace.TIME]: StateTime;
  [NameSpace.TASK]: StateTask;
}

export type ActionApp = ActionCondition | ActionTime | ActionTask;
export type ThunkDispatch = ReduxThunkDispatch<StateApp, {}, ActionApp>;
export type ThunkAction = ReduxThunkAction<Promise<void>, StateApp, {}, ActionApp>;
