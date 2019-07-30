import { Option } from 'client/types/forms';

const inputTasks: Option[] = [
  {
    title: 'Name',
    type: 'text',
    cssClass: 'task-form__input-text',
    name: 'name',
  },
  {
    title: 'Text',
    type: 'textarea',
    cssClass: 'task-form__input-text',
    name: 'text',
  },
];

export default inputTasks;
