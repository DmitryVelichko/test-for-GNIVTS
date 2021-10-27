import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.scss';

const Header: React.FC = () => {
  const nav = [
    { title: 'Главная', path: '/' },
    { title: 'О проекте', path: '/about' },
  ];

  return (
    <div className={classes.bar}>
      {nav.map((item) => (
        <NavLink
          activeClassName={classes.active}
          className={classes.link}
          to={item.path}
          key={item.path}
          exact
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
