import React, { ReactElement, FunctionComponent, Fragment } from 'react';
import inputTasks from 'client/constants/form-task';
import { Operation } from 'client/store/task/task';
import { getTaskStatus } from 'client/store/task/selector';
import { connect } from 'react-redux';
import { StateApp, ThunkDispatch } from 'client/types/reducer';
import { TaskStatus, Task } from 'client/types/task';
import Header from '../header/header';
import CustomForm from '../custom-form/custom-form';
import CustomSelect from '../custom-select/custom-select';

const customLists = [{ value: 'TOP', text: 'HEllo' }, { value: 'BOTTOM', text: 'test' }];

const stateTask = {
  name: '',
  text: '',
};
interface PropsState {
  taskStatus: TaskStatus[];
}
interface PropsDispatch {
  onSendTask: (task: Task) => void;
  onSendTaskStatus: (task: TaskStatus) => void;
}

type Props = PropsState & PropsDispatch;

const App: FunctionComponent = (): ReactElement => (
  <Fragment>
    <Header />
    <main className="page-content">
      <CustomForm state={stateTask} configInputs={inputTasks} />
      <CustomSelect items={customLists} />
    </main>
  </Fragment>
);

const mapStateToProps = (state: StateApp, ownProps: Props): Props => ({
  ...ownProps,
  taskStatus: getTaskStatus(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch): PropsDispatch => ({
  onSendTask: (task: Task): void => {
    dispatch(Operation.addTask(task));
  },
  onSendTaskStatus: (task: TaskStatus): void => {
    dispatch(Operation.addTaskStatus(task));
  },
});

export { App };
export default connect<Props, PropsDispatch, {}, StateApp>(
  mapStateToProps,
  mapDispatchToProps,
)(App);
