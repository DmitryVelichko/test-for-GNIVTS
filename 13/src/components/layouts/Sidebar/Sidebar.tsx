import React from 'react';

import classes from './Sidebar.module.scss';

const Sidebar: React.FC = (props) => (
  <aside className={classes.component}>
    <img
      src={require('./assets/gnivc-logo.png').default}
      alt="logo"
      className={classes.logo}
    />
    {props.children}
  </aside>
);

export default Sidebar;
