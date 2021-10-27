import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

import Posts from '../Posts';
import { posts as data, Post } from '../../data/posts';

const App: FC = () => {
  const [posts, setPosts] = useState<Post[]>(data);

  const [isVisible, setVisible] = useState(true);
  const [isHidden, setHidden] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  const isButtonToggle = () => {
    setVisible(!isVisible);
    setHidden(!isHidden);
  };

  return (
    <>
      <button type="button" onClick={isButtonToggle}>{isHidden ? 'show' : 'hide'}</button>
      {isVisible && (<Posts data={posts} />)}
    </>
  );
};

export default App;
