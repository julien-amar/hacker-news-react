import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';
import Columns from './Columns';
import Element from './Element';
import Button from './Button';
import Loader from './Loader';

const Home = ({ elements, error, loading, loadMore, showStory }) => (
  <div>
    <Columns>
      {elements.map(element => (
        <Cell key={element.id}>
          <Element showStory={showStory} {...element} />
        </Cell>
      ))}
    </Columns>
    <Button block text="More..." />
  </div>
);

// TODO : typer les props
Home.propTypes = {
};

export default Home;
