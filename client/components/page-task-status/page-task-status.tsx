import React, { ReactElement, FunctionComponent, Fragment } from 'react';
import inputTaskStatus from 'client/constants/form-task-status';
import { Operation } from 'client/store/task/task';
import { getTaskStatus } from 'client/store/task/selector';
import { connect } from 'react-redux';
import { StateApp, ThunkDispatch } from 'client/types/reducer';
import { TaskStatus } from 'client/types/task';
import CustomForm from '../custom-form/custom-form';

const stateTask: TaskStatus = {
  id: '',
  name: '',
  isActive: true,
};
interface PropsState {
  taskStatus: TaskStatus[];
}
interface PropsDispatch {
  onSendTaskStatus: (task: TaskStatus) => void;
}

type Props = PropsState & PropsDispatch;

const PageTaskStatus: FunctionComponent<Props> = ({ taskStatus, onSendTaskStatus }: Props): ReactElement => (
  <Fragment>
    {taskStatus
      && taskStatus.map((item: TaskStatus): ReactElement => <div key={`task-status-${item.id}`}>{item.name}</div>)}
    <CustomForm state={stateTask} configInputs={inputTaskStatus} onSend={onSendTaskStatus} />
  </Fragment>
);

const mapStateToProps = (state: StateApp, ownProps: Props): Props => ({
  ...ownProps,
  taskStatus: getTaskStatus(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch): PropsDispatch => ({
  onSendTaskStatus: (task: TaskStatus): void => {
    dispatch(Operation.addTaskStatus(task));
  },
});

export { PageTaskStatus };
export default connect<Props, PropsDispatch, {}, StateApp>(
  mapStateToProps,
  mapDispatchToProps,
)(PageTaskStatus);
