import React from 'react';

export default ({ isLoading, loadingProgress }) => (
  <div className="loader">
    {isLoading &&
    <div className="bar bar-sm">
      <div className="bar-item" role="progressbar" style={{width: loadingProgress + '%'}}></div>
    </div>
    }
  </div>
);
