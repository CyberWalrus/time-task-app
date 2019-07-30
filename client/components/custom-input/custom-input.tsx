import React, { ReactElement, FunctionComponent, ChangeEvent } from 'react';
import { Option } from 'client/types/forms';

interface Props {
  option: Option;
  value: Record<string, string>;
  onChangeValue: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}
const getElement = ({ option, value, onChangeValue }: Props): ReactElement => {
  switch (option.type) {
    case 'textarea':
      return (
        <textarea
          id={`task-${option.name}`}
          className={option.cssClass}
          name={option.name}
          value={value[option.name]}
          onChange={onChangeValue}
        />
      );
    case 'select':
      return <div />;
    default:
      return (
        <input
          id={`task-${option.name}`}
          type={option.type}
          className={option.cssClass}
          name={option.name}
          value={value[option.name]}
          onChange={onChangeValue}
        />
      );
  }
};
const TaskInput: FunctionComponent<Props> = ({ option, value, onChangeValue }: Props): ReactElement => (
  <div className="task-form__container">
    <label className="task-form__label" htmlFor={`task-${option.name}`}>
      {option.title}
    </label>
    {getElement({ option, value, onChangeValue })}
  </div>
);

export default TaskInput;
