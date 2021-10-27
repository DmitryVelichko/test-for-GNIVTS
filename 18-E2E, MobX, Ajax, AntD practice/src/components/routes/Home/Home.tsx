import React, { FC, useState, useEffect } from 'react';
import {
  Route, Switch, useHistory, useParams,
} from 'react-router';
import { observer } from 'mobx-react';

import Posts from '../../Posts';
import Search from '../../Search';
import Loading from '../../Loading';
import Error from '../../Error';
import { useLocalStorage } from '../../../hook';
import Table from '../../Table';
import classes from './Home.module.scss';
import PostStore from '../../../stores/PostStore/PostStore';

const Home: FC = observer(() => {
  const [search, setSearch] = useLocalStorage('search', '');
  const [isView, setView] = useState('list');
  const { posts, isLoading, isError } = PostStore;
  const {
    push,
    location: { pathname },
  } = useHistory();

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => setSearch(e.target.value);

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.btns}>
        <button
          className={classes.button}
          type="button"
          value="list"
          onClick={() => setView('list')}
        >
          List
        </button>
        <button
          className={classes.button}
          type="button"
          value="table"
          onClick={() => setView('table')}
        >
          Table
        </button>
        <button
          className={classes.button}
          type="button"
          value="graph"
          onClick={() => setView('graph')}
        >
          Graph
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
        <div style={{ margin: '40px' }}>Новая страница</div>
      )}
    </div>
  );
});

export default Home;
