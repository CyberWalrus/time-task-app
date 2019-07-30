import { combineReducers } from 'redux';
import { StateApp } from '../types/reducer';
import { initialState as initialStateCondition, reducer as condition } from './condition/condition';
import NameSpace from './name-space';
import { initialState as initialStateTime, reducer as time } from './time/time';
import { initialState as initialStateTask, reducer as task } from './task/task';

export const initialState = {
  [NameSpace.CONDITION]: initialStateCondition,
  [NameSpace.TIME]: initialStateTime,
  [NameSpace.TASK]: initialStateTask,
};
export default combineReducers<StateApp>({
  [NameSpace.CONDITION]: condition,
  [NameSpace.TIME]: time,
  [NameSpace.TASK]: task,
});
