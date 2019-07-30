import { Task, TaskStatus } from 'client/types/task';
import { StateApp } from 'client/types/reducer';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.TASK;

const getTasks = (state: StateApp): Task[] => state[NAME_SPACE].tasks;
const getTaskStatus = (state: StateApp): TaskStatus[] => state[NAME_SPACE].taskStatus;
export { getTasks, getTaskStatus };
