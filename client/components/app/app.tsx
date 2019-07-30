import React from 'react';
import { ReactElement, FunctionComponent, Fragment } from 'react';
import Header from '../header/header';
import FormTask from '../form-task/form-task';
import CustomSelect from '../custom-select/custom-select';

const customLists = [{ test: 'hello' }, { walrus: 'cyber' }];

const App: FunctionComponent = (): ReactElement => (
  <Fragment>
    <Header />
    <main className="page-content">
      <FormTask />
      <CustomSelect list={customLists} />
    </main>
  </Fragment>
);

export default App;
