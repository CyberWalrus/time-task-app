import React, {
  FC, ReactElement, useState, ChangeEvent, useCallback,
} from 'react';

import { Option } from 'client/types/forms';

interface Props {
  option?: Option;
  value?: Record<string, string>;
  list?: Record<string, string>[];
}
interface State {
  value: string;
}
const defaultState: State = { value: '' };

const CustomSelect: FC<Props> = ({ list }: Props): ReactElement => {
  const [state, setState] = useState<State>(defaultState);
  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setState({ ...state, value: event.target.value });
    },
    [state],
  );
  return (
    <div className="custom-select">
      <div className="custom-select__header">
        <input type="text" value={state.value} onChange={handleChangeValue} className="custom-select__input" />
      </div>
      <ul className="custom-select__list">
        {list
          && list.map(
            (item: Record<string, string>): ReactElement => (
              <li key={`custom-select-${Object.keys(item)[0]}`} className="custom-select__item">
                {Object.values(item)[0]}
              </li>
            ),
          )}
      </ul>
    </div>
  );
};

export default CustomSelect;
