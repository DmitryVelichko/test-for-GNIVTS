import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

import Posts from '../Posts';
import { posts as data, Post } from '../../data/posts';
import Search from '../Search';

const App: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState('');
  const [isVisible, setVisible] = useState(false);
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => setSearch(e.target.value);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  const isButtonToggle = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <button type="button" onClick={isButtonToggle}>{!isVisible ? 'показать' : 'скрыть'}</button>
      {
        isVisible && (

          <>
            <Search search={search} handleSearch={handleSearch} />
            <Posts data={posts} search={search} />
          </>
        )
      }
    </>
  );
};

export default App;
