import { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handelKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeyDown);
  }

  handaleKeyDown = e => {
    e.code === 'Escape' && this.props.toggleModal();
  }

  handelBackdropClick = e => {
    e.target === e.currentTarget && this.props.toggleMpdal();
  }
  render() {

    return (
      <div className={css.overlay} onClick={this.handelBackdropClick}>
        <div className={css.modal}>
          <img src={this.props.images} alt="" />
        </div>
      </div>
    );
  }
}
