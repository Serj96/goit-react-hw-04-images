import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ images, openModal }) {
  return (
    <Gallery className="gallery">
      {images.map(({ id, webformatUrl }, index) => (
        <ImageGalleryItem
          key={id}
          webformatUrl={webformatUrl}
          index={index}
          openModal={openModal}
        />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatUrl: PropTypes.string.isRequired,
    })
  ),
};
