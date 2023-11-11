import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchForm = ({ onformSubmit }) => {
  return (
    <form onSubmit={onformSubmit}>
      <label>
        <span>Search movies:</span>
        <input
          name="searchKey"
          type="text"
          required
          placeholder="Enter movies"
        />
      </label>
      <button type="submit">
        <span>
          <FiSearch size="10" color="black" />
        </span>
      </button>
    </form>
  );
};
export default SearchForm;
