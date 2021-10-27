import React, { FC } from 'react';

type SearchProps = {
  search: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
  hadleKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const Search: FC<SearchProps> = (props) => {
  const {
    search,
    handleSearch,
    hadleKeyDown,
    placeholder = 'search...',
  } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={search}
      onChange={handleSearch}
      onKeyDown={hadleKeyDown}
    />
  );
};

export default Search;
