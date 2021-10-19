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

}

export default Home;
