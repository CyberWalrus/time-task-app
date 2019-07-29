import * as React from 'react';
import { ReactElement, FunctionComponent, Fragment } from 'react';
import Header from '../header/header';
import FormTask from '../form-task/form-task';

const App: FunctionComponent = (): ReactElement => (
  <Fragment>
    <Header />
    <main className="page-content">
      <FormTask />
    </main>
  </Fragment>
);

export default App;
