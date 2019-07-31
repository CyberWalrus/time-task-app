import React, { ReactElement, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from '../header/header';
import PageTaskStatus from '../page-task-status/page-task-status';
import PageTasks from '../page-tasks/page-tasks';

const App = (): ReactElement => (
  <Fragment>
    <Header />
    <main className="page-content">
      <Link to="/">status</Link>
      <Link to="tasks">tasks</Link>
      <Route exact path="/" component={PageTaskStatus} />
      <Route path="/tasks" component={PageTasks} />
    </main>
  </Fragment>
);

export default App;
