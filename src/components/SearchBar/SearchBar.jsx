import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchForm_button,
  SearchForm_button_label,
  SearchForm_input,
} from './SearchBar.styled';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  state = {
    searchData: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handeleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchData);
  };

  handelChange = e => {
    this.setState({ searchData: e.target });
  };

  render() {
    return (
      <Header class="searchbar">
        <SearchForm class="form" onSubmit={this.handeleSubmit}>
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
            onChange={this.handelChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
