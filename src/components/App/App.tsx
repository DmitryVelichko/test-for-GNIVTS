import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../routes/Home';
import About from '../routes/About';
import Header from '../bars/Header';
import classes from './App.module.scss';

const NotFound = React.lazy(() => import('../routes/NotFound'));

const App: React.FC = () => (
  
);

export default App;
