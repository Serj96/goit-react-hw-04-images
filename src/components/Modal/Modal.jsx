import { useEffect, useCallback } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ toggleModal }) => {
  const handaleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handaleKeyDown);

    return () => {
      window.removeEventListener('keydown', handaleKeyDown);
    };
  }, [handaleKeyDown]);

  const handelBackdropClick = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handelBackdropClick}>
      <div className={css.modal}>
        <img src={this.props.images} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = { toggleModal: PropTypes.func.isRequired };

export default Modal

