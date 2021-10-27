import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../routes/Home';
import About from '../routes/About';
import Header from '../bars/Header';
import classes from './App.module.scss';

const NotFound = React.lazy(() => import('../routes/NotFound'));

const App: React.FC = () => (
  <div className={classes.component}>
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default App;
