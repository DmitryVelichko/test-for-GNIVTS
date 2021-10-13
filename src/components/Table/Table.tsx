import React, { FC, useEffect, useState } from 'react';

import { PostProps } from '../Posts/Post';
import classes from './Table.module.scss';

type TableProps = {
  data: PostProps[];
  search: string;
};

const Table: FC<TableProps> = (props) => {
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


};

export default Table;
