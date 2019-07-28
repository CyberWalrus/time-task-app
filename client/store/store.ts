import { combineReducers } from "redux";
import { StateApp } from "../types/reducer";
import {
  initialState as initialStateCondition,
  reducer as condition,
} from "./condition/condition";
import NameSpace from "./name-spaces";
import { initialState as initialStateTime, reducer as time } from "./time/time";
export const initialState = {
  [NameSpace.CONDITION]: initialStateCondition,
  [NameSpace.TIME]: initialStateTime,
};
export default combineReducers<StateApp>({
  [NameSpace.CONDITION]: condition,
  [NameSpace.TIME]: time,
});
