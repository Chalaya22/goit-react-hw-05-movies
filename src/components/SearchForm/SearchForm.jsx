import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { StyledSerchForm, StyledInput, StyledBtn } from './SearchForm.styled';

const SearchForm = ({ onformSubmit }) => {
  return (
    <StyledSerchForm onSubmit={onformSubmit}>
      <StyledInput
        name="searchKey"
        type="text"
        required
        placeholder="Enter movies"
      />

      <StyledBtn type="submit">
        <span>
          <FiSearch size="20" color="black" />
        </span>
      </StyledBtn>
    </StyledSerchForm>
  );
};
export default SearchForm;
