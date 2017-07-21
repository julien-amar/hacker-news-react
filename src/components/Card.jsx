import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, onTitleClick, subtitle, title, footer }) => (
  <div className="card story">
    <div className="card-header">
      <div
        className="card-title"
        onClick={onTitleClick}
        style={onTitleClick && { cursor: 'pointer' }}
      >
        {title}
      </div>
      <div className="card-subtitle">
        {subtitle}
      </div>
    </div>
    <div className="card-body">
      {children}
    </div>
    <div className="card-footer">
      {footer}
    </div>
  </div>
);

Card.propTypes = {
  children: PropTypes.any,
  onTitleClick: PropTypes.func,
  subtitle: PropTypes.any,
  title: PropTypes.any,
  footer: PropTypes.any,
};

export default Card;
