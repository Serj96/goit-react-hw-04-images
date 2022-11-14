import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './SearchBar.styled';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  state = {
    searchData: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchData);
  };

  handleChange = evt => {
    const { value } = evt.target;
    this.setState({ searchData: value });
  };

  render() {
    return (
      <Header className="searchbar">
        <SearchForm className="form" onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
