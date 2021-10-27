import React, { FC } from 'react';

export type PostProps = {
  id?: number;
  title: string;
  body?: string;
};

const Post: FC<PostProps> = (props) => (
  <div className="post-item">
    <h1>{props.title}</h1>
    {props.body && <p>{props.body}</p>}
  </div>
);

export default Post;
