import { StateApp } from '../../types/reducer';
import NameSpace from '../name-space';
import { TypeNotification } from './condition';

const NAME_SPACE = NameSpace.CONDITION;

const getMessage = (state: StateApp): string => state[NAME_SPACE].message;
const getTypeNotification = (state: StateApp): TypeNotification => state[NAME_SPACE].typeNotification;
export { getMessage, getTypeNotification };
