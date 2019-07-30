import React, { FunctionComponent, ReactElement } from 'react';
import SortableList, { State, PublicFunction } from '../sortable-tasks/sortable-tasks';

type PropsHoc = State & PublicFunction;
type Props = PropsHoc;
const PageDay: FunctionComponent<Props> = ({
  tasks,
  times,
  onAddTask,
  onTaskSortEnd,
  onChangeSizeTask,
}: Props): ReactElement => (
  <main className="page-content">
    <section>
      <h2>Time</h2>
      <input type="date" />
    </section>
    <SortableList
      times={times}
      tasks={tasks}
      onAddTask={onAddTask}
      onSortEnd={onTaskSortEnd}
      onChangeSizeTask={onChangeSizeTask}
    />
    <section />
  </main>
);

export default PageDay;
