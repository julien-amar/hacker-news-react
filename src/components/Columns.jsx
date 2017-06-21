import React from 'react';
import PropTypes from 'prop-types';

const Columns = ({ children }) => (
  <div className="columns col-gapless">
    {children}
  </div>
);

Columns.propTypes = {
  children: PropTypes.any,
};

export default Columns;
