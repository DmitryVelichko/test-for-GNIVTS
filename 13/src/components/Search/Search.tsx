import React, { FC } from 'react';

import classes from './Search.module.scss';

type SearchProps = {
  search: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const Search: FC<SearchProps> = (props) => {
  const { search, handleSearch, placeholder = 'Введите текст' } = props;
  return (
    <div className={classes.search_block}>
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
