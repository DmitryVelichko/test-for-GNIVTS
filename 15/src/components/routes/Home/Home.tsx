import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import {
  Route, Switch, useHistory, useParams,
} from 'react-router';

import Posts from '../../Posts';
import Search from '../../Search';
import Loading from '../../Loading';
import Error from '../../Error';
import { Post } from '../../../data/posts';
import { useLocalStorage } from '../../../hook';
import Table from '../../Table';
import classes from './Home.module.scss';

const Home: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useLocalStorage('search', '');
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [isView, setView] = useState('list');

  const {
    push,
    location: { pathname },
  } = useHistory();

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
        <button
          className={classes.button}
          type="button"
          value="list"
          onClick={() => setView('list')}
        >
          Страница 1
        </button>
        <button
          className={classes.button}
          type="button"
          value="table"
          onClick={() => setView('table')}
        >
          Табличка
        </button>
        <button
          className={classes.button}
          type="button"
          value="graph"
          onClick={() => setView('graph')}
        >
          Страница 2
        </button>
      </div>
      <Search search={search} handleSearch={handleSearch} />
      {isView === 'list' && (
        <div>
          <Posts data={posts} search={search} />
        </div>
      )}
      {isView === 'table' && (
        <div>
          <Table data={posts} search={search} />
        </div>
      )}
      {isView === 'graph' && (
        <div style={{ margin: '40px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent:'center', marginTop:'100px' }}><h1>404 Page not found</h1></div>
      )}
    </div>
  );
};

export default Home;
