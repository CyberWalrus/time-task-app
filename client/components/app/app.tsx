import React, { ReactElement, FunctionComponent, Fragment } from 'react';
import Header from '../header/header';
import FormTask from '../form-task/form-task';
import CustomSelect from '../custom-select/custom-select';

const customLists = [{ value: 'TOP', text: 'HEllo' }, { value: 'BOTTOM', text: 'test' }];

const App: FunctionComponent = (): ReactElement => (
  <Fragment>
    <Header />
    <main className="page-content">
      <FormTask />
      <CustomSelect items={customLists} />
    </main>
  </Fragment>
);

export default App;
