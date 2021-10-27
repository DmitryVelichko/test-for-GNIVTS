import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export type PostProps = {
  id?: number;
  title: string;
  body?: string;
};

const Post: FC<PostProps> = (props) => (
  <div className="post-item">
    <h1>{props.title}</h1>
    {props.body && <p>{props.body}</p>}
    <Link to={`/post/${props.id}-id`}>Ещё</Link>
  </div>
);

export default Post;
