import PropTypes from 'prop-types';
import {GalleryItem, GalleryItem_img} from './ImageGalleryItem.styled'


export default function ImageGalleryItem({ webformatUrl, openModal, index }) {
  return (
    <GalleryItem class="gallery-item">
      <GalleryItem_img
        src={webformatUrl}
        alt=""
        onClick={() => openModal(index)}
      />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  webformatUrl: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
