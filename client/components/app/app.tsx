import * as React from 'react';
import { ReactElement, FunctionComponent, Fragment } from 'react';
import Header from '../header/header';

const App: FunctionComponent = (): ReactElement => (
  <Fragment>
    <Header />
    <main className="page-content">hello</main>
  </Fragment>
);

export default App;
