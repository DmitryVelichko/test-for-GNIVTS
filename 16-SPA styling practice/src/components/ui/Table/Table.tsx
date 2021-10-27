import React from 'react';

import { UsersTypes } from '../../routes/Home';
import classes from './Table.module.scss';

const Table: React.FC<TableProps> = ({ content, tableCols }) => (
  <div className={classes.table}>
    <table>
      <thead>
        <tr>
          {tableCols.map((col) => <th key={col.type}>{col.label}</th>)}
        </tr>
      </thead>

      <tbody>
        {content.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

type TableProps = {
  content: UsersTypes[];
  tableCols: {
    type: string;
    label: string;
  }[];
};

export default Table;
