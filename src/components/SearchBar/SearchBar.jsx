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
        <SearchForm className="form" onSubmit={this.handeleSubmit}>
          <SearchForm_button type="submit" className="button">
            <SearchForm_button_label className="button-label">
              Search
            </SearchForm_button_label>
          </SearchForm_button>
          <SearchForm_input
            className="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handelChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
