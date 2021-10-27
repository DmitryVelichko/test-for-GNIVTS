import React from 'react';

import { UsersTypes } from '../../routes/Home';
import classes from './List.module.scss';

const ListItem: React.FC<ListItemProps> = ({ item }) => (
  <div className={classes.list_item}>
    <div className={classes.id}>{item.id}.</div>
    <div className={classes.name}>{item.name}</div>
    <div className={classes.email}>{item.email}</div>
  </div>
);

type ListItemProps = {
  item: UsersTypes;
};

export default ListItem;
