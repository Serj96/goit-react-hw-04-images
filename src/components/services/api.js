import PropTypes from './api';
import axios from 'axios';

export default function fetchImagesQuery(searchQuery, page) {
  const response = axios.get(
    'https://pixabay.com/api/?q=${searchQuery}&${page}=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'
  );
}
fetchImagesQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
