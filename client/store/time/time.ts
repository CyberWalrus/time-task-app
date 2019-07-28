import { StateApp, ThunkAction, ThunkDispatch } from "@client/type/reducer";
import { stringToJDN } from "@client/utils/date/date";
import { Action as ReduxAction } from "redux";

enum ActionType {
  SET_DATE = "SET_DATE",
}
export interface State {
  date: number;
}
interface SetDate extends ReduxAction {
  payload: number;
  type: ActionType.SET_DATE;
}

export type Action = SetDate;

const initialState: State = {
  date: 0,
};

const ActionCreator = {
  setDate: (value: number): SetDate => {
    return {
      payload: value,
      type: ActionType.SET_DATE,
    };
  },
};

const Operation = {
  setDate: (date: string): ThunkAction => (
    dispatch: ThunkDispatch,
    _getState: () => StateApp,
  ): Promise<void> => {
    return Promise.resolve(true).then((): void => {
      const dateJDN = stringToJDN(date);
      dispatch(ActionCreator.setDate(dateJDN));
    });
  },
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_DATE:
      return {...state, date: action.payload};
    default:
      return state;
  }
};

export { initialState, ActionCreator, ActionType, reducer };
