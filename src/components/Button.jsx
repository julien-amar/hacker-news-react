import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ block, size, text }) => (
  <button
    className={`btn ${block ? 'btn-block' : ''} btn-${size} btn-primary`}
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
