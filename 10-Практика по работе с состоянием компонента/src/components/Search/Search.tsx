import React, { FC } from 'react';

type SearchProps = {
  search: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const Search: FC<SearchProps> = (props) => {
  const { search, handleSearch, placeholder = 'Введите текст...' } = props;
  return <input type="text" placeholder={placeholder} value={search} onChange={handleSearch} />;
};

export default Search;
