import { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  //   toggleModal = () => {
  //     this.setState(({ showModal }) => ({
  //       showModal: !showModal,
  //     }));
  //   };
  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
