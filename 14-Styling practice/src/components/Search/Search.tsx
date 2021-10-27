import React, { FC } from 'react';

import classes from './Search.module.scss';

type SearchProps = {
  search: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const Search: FC<SearchProps> = (props) => {
  const { search, handleSearch, placeholder = 'Введите текст' } = props;
  return <input className={classes.search} type="text" placeholder={placeholder} value={search} onChange={handleSearch} />;
};

export default Search;
