import { useState } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './SearchBar.styled';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [searchData, setSearchData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchData);
  };

  const handleChange = evt => {
    const { value } = evt.target;
    setSearchData(value);
  };
    return (
      <Header className="searchbar">
        <SearchForm className="form" onSubmit={handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <SearchFormLabel className="button-label">
              Search
            </SearchFormLabel>
          </SearchFormButton>
          <SearchFormInput
            className="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </SearchForm>
      </Header>
    );
}
  
Searchbar.protoType = {
  onSubmit: PropTypes.func.isRequired,
};

