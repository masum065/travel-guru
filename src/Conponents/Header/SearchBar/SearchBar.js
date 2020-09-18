import { SearchIcon } from '@primer/octicons-react';
import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <SearchIcon size={24} />
      <input
        type='search'
        placeholder='Search your Destination...'
        name='searchBar'
        id='searchBar'
      />
    </div>
  );
};

export default SearchBar;
