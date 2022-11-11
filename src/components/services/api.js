import PropTypes from 'prop-types';
import axios from 'axios';

export default function fetchImagesQuery(searchQuery, page) {
  const response = axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=30394221-a2970c3eae9beef771f498960&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

fetchImagesQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
