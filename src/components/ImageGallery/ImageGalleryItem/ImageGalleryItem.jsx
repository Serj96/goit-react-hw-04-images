import PropTypes from 'prop-types';
import {GalleryItem, GalleryItem_img} from './ImageGalleryItem.styled'


export default function ImageGalleryItem({ webformatURL, openModal, index }) {
  return (
    <GalleryItem class="gallery-item">
      <GalleryItem_img
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
