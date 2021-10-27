import React, { useState, useEffect } from 'react';

import classes from './Tabs.module.scss';
import List from '../List';
import Table from '../Table/Table';
import { UsersTypes } from '../../routes/Home';

const TabContent: React.FC<TabContentProps> = ({
  activeTab, tabsContent, tableCols, search,
}) => {
  const [filteredUsers, setFilteredUsers] = useState(tabsContent);

  useEffect(() => {
    if (search.length >= 1) {
      const filtered = tabsContent.filter((user) => user.name.includes(search));
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(tabsContent);
    }
  }, [search, tabsContent]);

  const createContent = (): React.ReactNode => {
    if (activeTab === 'list') return <List content={filteredUsers} />;
    if (activeTab === 'table') return <Table content={filteredUsers} tableCols={tableCols} />;
    if (activeTab === 'graph') return <h1 className={classes.about}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, perferendis provident delectus corporis reiciendis nam voluptatum quasi explicabo qui magnam, fuga laudantium expedita culpa in labore iste nisi inventore porro. Impedit recusandae illum quibusdam modi unde ipsam reprehenderit distinctio odio!</h1>;
    return null;
  };

  return (
    <div className="tab_content">
      {createContent()}
    </div>
  );
};

type TabContentProps = {
  activeTab: string;
  tabsContent: UsersTypes[];
  tableCols: {
    type: string;
    label: string;
  }[];
  search: string;
};

export default TabContent;
