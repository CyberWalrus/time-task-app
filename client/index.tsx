import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/app';
import { persistor, store } from './store-configure';

const init = (): void => {
  render(
    <Provider store={store}>
      <PersistGate loading={undefined} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>,
    document.querySelector('#app'),
  );
};

init();
