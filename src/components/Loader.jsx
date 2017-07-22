import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ isLoading, loadingProgress }) => {
  return (
  <div className="loader">
    {isLoading &&
    <div className="bar bar-sm">
      <div className="bar-item" role="progressbar" style={{width: loadingProgress + '%'}}></div>
    </div>
    }
  </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadingProgress: PropTypes.number.isRequired
};

export default Loader;