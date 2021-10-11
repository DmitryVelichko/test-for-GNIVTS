import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

import classes from './App.module.scss';
import Posts from '../Posts';
import Search from '../Search';
import Loading from '../Loading';
import Error from '../Error';
import { Post } from '../../data/posts';
import { useLocalStorage } from '../../hook';
import Table from '../Table';

const App: FC = () => {
  
};

export default App;