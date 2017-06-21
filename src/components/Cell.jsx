import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ children }) => (
  <div
    className="col-xs-12 col-sm-4 col-md-3 col-2"
    style={{ padding: '5px' }}
  >
    {children}
  </div>
);

Cell.propTypes = {
  children: PropTypes.any,
};

export default Cell;
