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

  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr className={classes.tr}>
          <td className={classes.td}>Title</td>
          <td className={classes.td}>Body</td>
        </tr>
      </thead>
      <tbody>
        {filtered.map((row) => (
          <tr key={row.id} className={classes.tr}>
            <td className={classes.td}>{row.title}</td>
            <td className={classes.td}>{row.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
