import React from 'react';

import Link from './Link';

export default ({ onTitleClick, title = '' }) => (
  <header className="navbar bg-gray">
    <section className="navbar-section">
      <Link to="/">
        {title}
      </Link>
    </section>
    <section className="navbar-section">
    </section>
  </header>
);
