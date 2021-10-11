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
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useLocalStorage('search', '');
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [isView, setView] = useState('list');

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => setSearch(e.target.value);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (isError) return <Error />;
  if (isLoading) return <Loading />;

  return (
    <div className={classes.wrapper}>
      <div className={classes.btns}>
        <button className={classes.button} type="button" value="list" onClick={() => setView('list')}>Список</button>
        <button className={classes.button} type="button" value="table" onClick={() => setView('table')}>Таблица</button>
      </div>

     
};

export default App;