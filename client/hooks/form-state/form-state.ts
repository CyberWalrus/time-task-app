import { useState, ChangeEvent } from 'react';

type InputEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>;
type HandleSelectChange = (optionSelected: object) => void;
interface ValueObject {
  value: string;
}
type OptionSelected = object & ValueObject;
interface ReturnValues<S> {
  handleSubmit: (event: Event) => void;
  handleInputChange: (event: InputEvent) => void;
  handleSelectChange: (name: string) => (optionSelected: { value: string; label: string }) => void;
  inputs: S;
}
interface Props<S> {
  state: S;
  callback?: () => void;
}
const FormState = <S>({ state, callback }: Props<S>): ReturnValues<S> => {
  const [inputs, setInputs] = useState<S>(state);

  const handleSubmit = (event: Event): void => {
    if (event) {
      event.preventDefault();
    }
    if (callback) {
      callback();
    }
  };
  const handleInputChange = (event: InputEvent): void => {
    event.persist();
    setInputs(
      (values: S): S => ({
        ...values,
        [event.target.name]: event.target.value,
      }),
    );
  };
  const handleSelectChange = (name: string): HandleSelectChange => (optionSelected: OptionSelected): void => {
    const { value } = optionSelected;
    setInputs((values: S): S => ({
      ...values,
      [name]: value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    handleSelectChange,
    inputs,
  };
};

export default FormState;
