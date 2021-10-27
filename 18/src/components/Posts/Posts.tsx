import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Post, { PostProps } from './Post';
import classes from './Posts.module.scss';

export type PostsProps = {
  data: PostProps[];
  search?: string;
};

const Posts: FC<PostsProps> = (props) => {
  const { data, search = '' } = props;
  const [filtered, setFiltered] = useState<PostProps[]>(data);

  useEffect(() => {
    if (search.length > 2) {
      const filteredPosts = data.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

      setFiltered(filteredPosts);
    } else {
      setFiltered(data);
    }
  }, [search]);

  return (
    <div className={classes.posts}>
      {filtered.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
