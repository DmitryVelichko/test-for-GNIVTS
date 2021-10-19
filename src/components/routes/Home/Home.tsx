import React, { useEffect, useState } from 'react';

import Main from '../../layouts/Main';
import Tabs from '../../ui/Tabs';
import TabContent from '../../ui/Tabs/TabContent';
import Search from '../../ui/Search';
import useLocalStorage from '../../../hooks/useLocalStorage';
import classes from './Home.module.scss';
import { postsArr } from '../../../data/postsArr';

const Home: React.FC = () => {
  const [users, setUsers] = useState<UsersTypes[]>([]);
  const [activeTab, setActiveTab] = useState('list');
  const [search, setSearch] = useLocalStorage('search', '');

  useEffect(() => {
    setUsers(postsArr);
  }, []);

  const tableCols = [
    { type: 'id', label: 'Id' },
    { type: 'name', label: 'Name' },
    { type: 'email', label: 'Еmail' },
  ];

  const tabs = [
    { id: 'list', label: 'Список' },
    { id: 'table', label: 'Таблица' },
    { id: 'graph', label: 'Graph' },
  ];

  return (
    <Main>
      <div className={classes.content}>
        <Search search={search} setSearch={setSearch} />
        <Tabs tabs={tabs} setActiveTab={setActiveTab} />
        <TabContent
          activeTab={activeTab}
          tabsContent={users}
          tableCols={tableCols}
          search={search}
        />
      </div>
    </Main>
  );
};

export type UsersTypes = {
  id: number;
  name: string;
  email: string;
};

export default Home;
