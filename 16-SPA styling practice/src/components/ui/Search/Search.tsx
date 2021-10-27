import React from 'react';

import classes from './Search.module.scss';

const Search: React.FC<SearchProps> = ({ search, setSearch }) => (
  <div className={classes.search_block}>
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Введите текст"
    />
  </div>
);

type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default Search;
