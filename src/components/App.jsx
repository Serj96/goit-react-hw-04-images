import { Component } from 'react';
import Section from './Section/Section';
import Modal from './Modal/Modal';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    showModal: false,
    loading: false,
  };

  render() {
    const { showModal } = this.state;
    return (
      <Section>
        {showModal && (
          <Modal>
            <h1>qasdfgh</h1>
          </Modal>
        )}
        <SearchBar />
        <ImageGallery />
        <Button />
      </Section>
    );
  }
}
