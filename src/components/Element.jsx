import React from 'react';
import PropTypes from 'prop-types';

import FaUser from 'react-icons/lib/fa/user'
import FaDialog from 'react-icons/lib/fa/comment-o'

import Card from './Card';
import Link from './Link';

import { getHost } from '../services/url';

const Element = ({ id, title, url, descendants, by, score, showStory }) => (
  <Card
    title={title}
    onTitleClick={showStory.bind(null, id)}
    subtitle={
      url && (
        <div>
          <Link to={url} newTab>{getHost(url)}</Link> - ({score} pts)
        </div>
      )
    }
    footer={(
      <div>
        <FaDialog /> {descendants} <FaUser /> {by}
      </div>
    )}
    />
);

Element.propTypes = {
  id: PropTypes.number.isRequired, 
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired, 
  descendants: PropTypes.number.isRequired, 
  by: PropTypes.string.isRequired, 
  score: PropTypes.number.isRequired,
  showStory: PropTypes.func.isRequired
};

export default Element;
