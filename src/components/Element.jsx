import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import Link from './Link';
import { getHost } from '../services/url';

const Element = ({ id, title, url, descendants, by, score, showStory }) => (
  <Card
    title={title}
    onTitleClick={showStory.bind(null, id)}
    subtitle={
      url && <Link to={url} newTab>{getHost(url)}</Link>
    }>

    {score} -  by {by} {descendants} comments 
  </Card>
);

// TODO : Default validation needed
Element.propTypes = {
};

Element.defaultProps = {
};

export default Element;
