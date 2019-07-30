import React, { ReactElement, FunctionComponent } from 'react';

import inputTasks from 'client/constants/form-task';
import { Option } from 'client/types/forms';
import FormState from 'client/hooks/form-state/form-state';
import CustomInput from '../custom-input/custom-input';

const state = {
  name: '',
  text: '',
};
const FormTask: FunctionComponent = (): ReactElement => {
  const { inputs, handleInputChange } = FormState({ state });
  return (
    <form>
      <h2>Add Task</h2>
      {inputTasks
        && inputTasks.map(
          (item: Option): ReactElement => (
            <CustomInput
              key={`form-task-${item.name}`}
              option={item}
              value={inputs}
              onChangeValue={handleInputChange}
            />
          ),
        )}
    </form>
  );
};

export default FormTask;
