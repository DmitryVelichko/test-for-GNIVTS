import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

import Posts from '../Posts';
import Search from '../Search';
import { Post } from '../../data/posts';

const App: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState('');

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => setSearch(event.target.value);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=50')
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <>
      <Search search={search} handleSearch={handleSearch} />
      <Posts data={posts} search={search} />
    </>
  );
};

export default App;
