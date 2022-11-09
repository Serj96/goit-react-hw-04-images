import PropTypes from 'prop-types';
import axios from 'axios';

export default function fetchImagesQuery(searchQuery, page) {
  const response = axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

fetchImagesQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
