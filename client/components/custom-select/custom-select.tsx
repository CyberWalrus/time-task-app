import React, {
  FC, ReactElement, useState, ChangeEvent, useCallback, useEffect, FocusEvent,
} from 'react';
import { Option } from 'client/types/forms';

interface Item {
  value: string;
  text: string;
}
interface Props {
  option?: Option;
  value?: Record<string, string>;
  items?: Item[];
}
interface State {
  value: string;
  selected: string;
  items: Item[];
  isOpen: boolean;
}
const defaultState: State = {
  value: '',
  selected: '',
  items: [],
  isOpen: false,
};

const CustomSelect: FC<Props> = ({ items }: Props): ReactElement => {
  const [state, setState] = useState<State>({ ...defaultState, items });

  const updateList = useCallback((): void => {
    const itemsNew = items
      .slice(0)
      .filter((item: Item): boolean => item.text.toLowerCase().indexOf(state.value.toLowerCase()) >= 0);
    setState({ ...state, items: itemsNew });
  }, [items, state]);

  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setState({ ...state, value: event.target.value });
    },
    [state],
  );

  const handleChangeSelected = useCallback(
    (selected: Item): void => {
      setState({
        ...state,
        selected: selected.value,
        value: selected.text,
      });
    },
    [state],
  );

  const handleBlur = (event: FocusEvent<HTMLDivElement>): void => {
    const target = event.relatedTarget;
    if (target && target instanceof Node && event.currentTarget.contains(target)) {
      return;
    }
    const element = items.find((item: Item): boolean => item.value === state.selected);
    const value = element ? element.text : '';
    setState({ ...state, isOpen: false, value });
  };
  useEffect((): void => {
    updateList();
  }, [state.value, updateList]);

  return (
    <div className="custom-select" onFocus={(): void => setState({ ...state, isOpen: true })} onBlur={handleBlur}>
      <div className="custom-select__header">
        {state.selected}
        <input type="text" value={state.value} onChange={handleChangeValue} className="custom-select__input" />
        <button type="button" onClick={(): void => handleChangeSelected({ value: '', text: '' })}>
          Clear
        </button>
      </div>
      <ul
        className="custom-select__list"
        style={{ visibility: state.isOpen ? 'visible' : 'hidden' }}
        onFocus={(): void => setState({ ...state, isOpen: true })}
      >
        {state.items
          && state.items.map(
            (item: Item): ReactElement => (
              <li key={`custom-select-${item.value}`} className="custom-select__item">
                <button type="button" onClick={(): void => handleChangeSelected(item)}>
                  {item.text}
                </button>
              </li>
            ),
          )}
      </ul>
    </div>
  );
};

export default CustomSelect;
