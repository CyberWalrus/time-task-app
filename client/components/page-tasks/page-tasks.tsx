import React, { ReactElement, FunctionComponent, Fragment } from 'react';
import inputTasks from 'client/constants/form-tasks';
import { Operation } from 'client/store/task/task';
import { getTasks } from 'client/store/task/selector';
import { connect } from 'react-redux';
import { StateApp, ThunkDispatch } from 'client/types/reducer';
import { Task } from 'client/types/task';
import CustomForm from '../custom-form/custom-form';

const stateTask: Task = {
  id: '',
  name: '',
  text: '',
  taskStatusId: '',
  isActive: true,
};
interface PropsState {
  tasks: Task[];
}
interface PropsDispatch {
  onSendTask: (task: Task) => void;
}

type Props = PropsState & PropsDispatch;

const PageTasks: FunctionComponent<Props> = ({ tasks, onSendTask }: Props): ReactElement => (
  <Fragment>
    {tasks && tasks.map((item: Task): ReactElement => <div key={`task-status-${item.id}`}>{item.name}</div>)}
    <CustomForm state={stateTask} configInputs={inputTasks} onSend={onSendTask} />
  </Fragment>
);

const mapStateToProps = (state: StateApp, ownProps: Props): Props => ({
  ...ownProps,
  tasks: getTasks(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch): PropsDispatch => ({
  onSendTask: (task: Task): void => {
    dispatch(Operation.addTask(task));
  },
});

export { PageTasks };
export default connect<Props, PropsDispatch, {}, StateApp>(
  mapStateToProps,
  mapDispatchToProps,
)(PageTasks);
