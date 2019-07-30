import { useState, ChangeEvent, FormEvent } from 'react';

type InputEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>;
type HandleSelectChange = (optionSelected: object) => void;
interface ValueObject {
  value: string;
}
type OptionSelected = object & ValueObject;
interface ReturnValues<T> {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (event: InputEvent) => void;
  handleSelectChange: (name: string) => (optionSelected: { value: string; label: string }) => void;
  inputs: T;
}
interface Props<T> {
  state: T;
  callback: (item: T) => void;
}
const FormState = <T extends {}>({ state, callback }: Props<T>): ReturnValues<T> => {
  const [inputs, setInputs] = useState<T>(state);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    if (event) {
      event.preventDefault();
    }
    if (callback) {
      callback(inputs);
    }
  };
  const handleInputChange = (event: InputEvent): void => {
    event.persist();
    setInputs(
      (values: T): T => ({
        ...values,
        [event.target.name]: event.target.value,
      }),
    );
  };
  const handleSelectChange = (name: string): HandleSelectChange => (optionSelected: OptionSelected): void => {
    const { value } = optionSelected;
    setInputs(
      (values: T): T => ({
        ...values,
        [name]: value,
      }),
    );
  };
  return {
    handleSubmit,
    handleInputChange,
    handleSelectChange,
    inputs,
  };
};

export default FormState;
