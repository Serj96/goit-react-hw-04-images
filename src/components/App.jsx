import { Component } from 'react';
import Section from './Section/Section';
import Modal from './Modal/Modal';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    searchData: '',
    images: [],
    page: 0,
    showModal: false,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {

  }

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
        <Loader/>
        <Button />
      </Section>
    );
  }
}
