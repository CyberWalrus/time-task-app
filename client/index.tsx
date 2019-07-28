import React from 'react';
import {render} from 'react-dom';
import App from './components/app/app';

const init = (): void => {
  render(<App />, document.querySelector(`#app`));
};

init();
