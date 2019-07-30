import React, { ReactElement, SFC } from 'react';
import { Option } from 'client/types/forms';
import FormState from 'client/hooks/form-state/form-state';
import CustomInput from '../custom-input/custom-input';

interface Props<T> {
  state: T;
  configInputs: Option[];
  onSend: (item: T) => void;
}
const CustomForm = <T extends {}>({ state, configInputs, onSend }: Props<T>): ReactElement => {
  const { inputs, handleInputChange, handleSubmit } = FormState({ state, callback: onSend });
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      {configInputs
        && configInputs.map(
          (item: Option): ReactElement => (
            <CustomInput
              key={`form-task-${item.name}`}
              option={item}
              value={inputs}
              onChangeValue={handleInputChange}
            />
          ),
        )}
      <button type="submit"> Submit</button>
    </form>
  );
};

export default CustomForm;
