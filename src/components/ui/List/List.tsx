import React from 'react';

import { UsersTypes } from '../../routes/Home';
import ListItem from './ListItem';

const List: React.FC<TableProps> = ({ content }) => (
  <div className="list">
    {content.map((item) => <ListItem item={item} key={item.id} />)}
  </div>
);

type TableProps = {
  content: UsersTypes[];
};

export default List;
