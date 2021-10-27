import React, { FC, useEffect, useState } from 'react';

import { PostProps } from '../Posts/Post';
import classes from './Table.module.scss';

type TableProps = {
  data: PostProps[];
  search: string;
};

const Table: FC<TableProps> = (props) => {
  const { data, search = '' } = props;

  const [filteredData, setFilteredData] = useState<PostProps[]>(data);

  useEffect(() => {
    if (search.length > 2) {
      const filteredPosts = data.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

      setFilteredData(filteredPosts);
    } else {
      setFilteredData(data);
    }
  }, [search]);

  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr className={classes.tr}>
          <td className={classes.td}>Заголовок</td>
          <td className={classes.td}>Подробности</td>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row) => (
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
