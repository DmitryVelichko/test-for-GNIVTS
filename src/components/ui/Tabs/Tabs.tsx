import React from 'react';

import classes from './Tabs.module.scss';

const Tabs: React.FC<TabsProps> = ({ tabs, setActiveTab }) => (
  <div className={classes.tab_panel}>
    {tabs.map((tab) => (
      <button
        className={classes.link}
        onClick={() => setActiveTab(tab.id)}
        type="button"
        key={tab.id}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

type TabsProps = {
  tabs: {
    id: string;
    label: string;
  }[];
  setActiveTab: (arg0: string) => void;
};

export default Tabs;
