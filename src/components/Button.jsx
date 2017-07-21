import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ block, size, text, onClick }) => (
  <button
    className={`btn ${block ? 'btn-block' : ''} btn-${size} btn-primary`}
    onClick={event => {
        if (onClick) {
          event.preventDefault();
          event.stopPropagation();
          onClick();
        }
      }}
    type="button"
  >
    {text}
  </button>
);

Button.propTypes = {
  block: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  size: 'md',
};

export default Button;
