import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchForm_button,
  SearchForm_button_label,
  SearchForm_input,
} from './SearchBar.styled';

export default class SearchBar extends Component {
  render() {
    return (
      <Header class="searchbar">
        <SearchForm class="form">
          <SearchForm_button type="submit" class="button">
            <SearchForm_button_label class="button-label">
              Search
            </SearchForm_button_label>
          </SearchForm_button>
          <SearchForm_input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
