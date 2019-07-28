import {
  ThunkAction as ReduxThunkAction,
  ThunkDispatch as ReduxThunkDispatch,
} from "redux-thunk";
import {
  Action as ActionCondition,
  State as StateCondition,
} from "../store/condition/condition";
import NameSpace from "../store/name-spaces";
import { Action as ActionTime, State as StateTime } from "../store/time/time";

export interface StateApp {
  [NameSpace.CONDITION]: StateCondition;
  [NameSpace.TIME]: StateTime;
}

export type ActionApp = ActionCondition | ActionTime;
export type ThunkDispatch = ReduxThunkDispatch<StateApp, {}, ActionApp>;
export type ThunkAction = ReduxThunkAction<
  Promise<void>,
  StateApp,
  {},
  ActionApp
>;
