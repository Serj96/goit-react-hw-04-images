import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ webformatURL, openModal, index }) {
  return (
    <GalleryItem className="gallery-item">
      <GalleryItemImg
        src={webformatURL}
        alt=""
        onClick={() => openModal(index)}
      />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
