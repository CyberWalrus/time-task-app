import React, {
  ReactElement, useState, ChangeEvent, useCallback, useEffect, FocusEvent,
} from 'react';
import { Option } from 'client/types/forms';

interface Item {
  value: string;
  text: string;
}
interface Props<T, V> {
  option?: Option;
  value?: Record<string, string>;
  items: T[];
  keyValue: V;
  keyText: V;
}
interface State<T> {
  value: string;
  selected: string;
  items: T[];
  isOpen: boolean;
}
const defaultState = {
  value: '',
  selected: '',
  items: [],
  isOpen: false,
};

const CustomSelect = <T extends Record<V, string>, V extends 'value' | 'id' | 'name' | 'text'>({
  items,
  keyValue,
  keyText,
}: Props<T, V>): ReactElement => {
  const [state, setState] = useState<State<T>>({ ...defaultState, items });

  const updateList = useCallback((): void => {
    const itemsNew = items
      .slice(0)
      .filter((item: T): boolean => item[keyText].toLowerCase().indexOf(state.value.toLowerCase()) >= 0);
    setState({ ...state, items: itemsNew });
  }, [items, keyText, state]);

  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setState({ ...state, value: event.target.value });
    },
    [state],
  );

  const handleChangeSelected = useCallback(
    (selected: T): void => {
      setState({
        ...state,
        selected: selected[keyValue],
        value: selected[keyText],
        isOpen: false,
      });
    },
    [keyText, keyValue, state],
  );

  const handleClearSelected = useCallback((): void => {
    setState({
      ...state,
      selected: '',
      value: '',
    });
  }, [state]);

  const handleBlur = (event: FocusEvent<HTMLDivElement>): void => {
    const target = event.relatedTarget;
    if (target && target instanceof Node && event.currentTarget.contains(target)) {
      return;
    }
    const element = items.find((item: T): boolean => item[keyValue] === state.selected);
    const value = element ? element[keyText] : '';
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
        <button type="button" onClick={handleClearSelected}>
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
            (item: T): ReactElement => (
              <li key={`custom-select-${item[keyValue]}`} className="custom-select__item">
                <button type="button" onClick={(): void => handleChangeSelected(item)}>
                  {item[keyText]}
                </button>
              </li>
            ),
          )}
      </ul>
    </div>
  );
};

export default CustomSelect;
