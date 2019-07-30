import { getLengthSame } from 'client/utils/array/array';
import React from 'react';
import { Fragment, ReactElement } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

export interface Time {
  minute: number;
  text: string;
  taskId?: number;
}
export interface State {
  tasks?: string[];
  times?: Time[];
}
export interface HandleSortEnd {
  oldIndex: number;
  newIndex: number;
}
export interface PublicFunction {
  onAddTask?: (key: number) => void;
  onChangeTask?: (key: number, length: number) => void;
  onTaskSortEnd?: ({ oldIndex, newIndex }: HandleSortEnd) => void;
  onChangeSizeTask?: (key: number) => void;
}
type PropsHoc = State & PublicFunction;
type Props = PropsHoc;
interface SortableItemProps {
  tasks: string[];
  taskId: number;
  index: number;
  lengthElement: number;
}
const SortableTask = SortableElement(
  ({
    tasks,
    taskId,
    index,
    onAddTask,
    onChangeSizeTask,
    lengthElement,
  }: SortableItemProps & PublicFunction): ReactElement => (
    <div className="time-table__task" style={{ gridRowEnd: `span ${lengthElement}` }}>
      {taskId !== undefined ? (
        <Fragment>
          {tasks[taskId]}
          <button type="button" onClick={(): void => onChangeSizeTask(index - 1 + lengthElement)}>
            +
          </button>
        </Fragment>
      ) : (
        <button type="button" onClick={(): void => onAddTask(index)}>
          +
        </button>
      )}
    </div>
  ),
);
const SortableTaskList = SortableContainer(
  ({
    times, tasks, onAddTask, onChangeSizeTask,
  }: PropsHoc): ReactElement => {
    let nextIndex = 0;
    let lengthElement = 1;
    return (
      <div className="time-table">
        {times
          && times.map(
            ({ text, taskId }: Time, index: number): ReactElement => {
              let isShow = true;
              if (nextIndex <= index) {
                lengthElement = getLengthSame(times, 'taskId', index);
                nextIndex = index + lengthElement;
                isShow = true;
              } else {
                lengthElement = 1;
                isShow = false;
              }
              return (
                <React.Fragment key={`task-list-${taskId}`}>
                  <div className="time-table__time">{text}</div>
                  {isShow ? (
                    <SortableTask
                      tasks={tasks}
                      taskId={taskId}
                      index={index}
                      lengthElement={lengthElement}
                      onAddTask={onAddTask}
                      onChangeSizeTask={onChangeSizeTask}
                    />
                  ) : (
                    <Fragment />
                  )}
                </React.Fragment>
              );
            },
          )}
      </div>
    );
  },
);
export default SortableTaskList;
