import { ButtonLoad } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ nextPage }) => {
  return (
    <ButtonLoad type="button" className="button" onClick={nextPage}>
      <span className="ms-2">Load more</span>
    </ButtonLoad>
  );
};

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};

export default Button;
