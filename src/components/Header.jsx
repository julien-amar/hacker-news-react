import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';

const Header = ({ onTitleClick, title }) => {
  return (
    <header className="navbar bg-gray">
      <section className="navbar-section navbar-brand">
        <Link to="/">
          {title}
        </Link>
      </section>
      <section className="navbar-section">
      </section>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  onTitleClick: PropTypes.func
};

Header.defaultProps = {
  title: '',
  onTitleClick: () => { }
};

export default Header;