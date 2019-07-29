import * as React from 'react';
import { ReactElement, FunctionComponent, ChangeEvent } from 'react';
import { Option } from '@client/types/forms';

interface Props {
  option: Option;
  value: Record<string, string>;
  onChangeValue: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}
const TaskInput: FunctionComponent<Props> = ({ option, value, onChangeValue }: Props): ReactElement => (
  <div className="task-form__container">
    <label className="task-form__label" htmlFor={`task-${option.name}`}>
      {option.title}
    </label>
    {option.type === 'textarea' ? (
      <textarea
        id={`task-${option.name}`}
        className={option.cssClass}
        name={option.name}
        value={value[option.name]}
        onChange={onChangeValue}
      />
    ) : (
      <input
        id={`task-${option.name}`}
        type={option.type}
        className={option.cssClass}
        name={option.name}
        value={value[option.name]}
        onChange={onChangeValue}
      />
    )}
  </div>
);

export default TaskInput;
