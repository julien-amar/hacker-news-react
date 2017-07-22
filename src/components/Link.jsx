import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ children, className, newTab, onClick, to }) => {
  const props = newTab ? {
    target: '_blank',
    rel: 'noopener noreferrer',
  } : {};

  return (
    <a
      className={className}
      href={to}
      onClick={event => {
        if (onClick) {
          event.preventDefault();
          event.stopPropagation();
          onClick();
        }
      }}
      {...props}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  newTab: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired
};

export default Link;