import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FaUser from 'react-icons/lib/fa/user'
import FaClock from 'react-icons/lib/fa/clock-o'

import Loader from './Loader';
import Link from './Link';
import Card from './Card';

import { getItem } from '../services/fetch';
import { timeDifference } from '../services/date';

const Story = class extends Component {
  state = {
    story: {
      comments: []
    },
    isLoading: true,
    loadingProgress: 0
  }

  async loadComments(item, kids) {
    if (!kids) return;
    
    item.comments = await Promise.all(
      kids.map(getItem)
    )

    let progress = this.state.loadingProgress + (kids.length * 100 / this.state.story.descendants)

    this.setState({loadingProgress: progress})

    await Promise.all(
      item.comments.map(comment => !comment.deleted && comment.kids && this.loadComments(comment, comment.kids))
    )
  }

  async loadStory(storyId) {
    let story = await getItem(storyId)

    this.setState({ story })

    await this.loadComments(story, story.kids)
  }

  async componentWillMount() {
    let storyId = this.props.storyId

    await this.loadStory(storyId);

    this.setState({ isLoading: false })
  }

  renderComments() {
    return (
      <div>
        <h1>
          <Link to={this.state.story.url} newTab>
            {this.state.story.title}
          </Link>
        </h1>
        {this.state.story.comments &&
         this.state.story.comments.map(comment  => (
          <div className="comment-list">
            {this.renderCommentsRecursive(comment)}
          </div>
        ))}
      </div>
    );
  }

  renderCommentsRecursive(comment) {
    return (
      !comment.deleted &&
      <div className="comment-entry">
        <Card
          title={(
            <div>
              <FaUser /> {comment.by} <FaClock /> {timeDifference(new Date(), new Date(comment.time * 1000))}
            </div>
          )}>
          <div dangerouslySetInnerHTML={{__html: comment.text}} />
        </Card>
        
        {comment.comments &&
         comment.comments.map(comment  => (
          <div className="comment-entry">
            {this.renderCommentsRecursive(comment)}
          </div>
        ))}
      </div>
    );
  }

  renderLoader() {
    return (
      <div>
        <Loader isLoading={this.state.isLoading} loadingProgress={this.state.loadingProgress} />
      </div>
    );
  }

  renderPage() {
    if (this.state.isLoading) {
      return this.renderLoader();
    }
    return this.renderComments();
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

Story.propTypes = {
  storyId: PropTypes.number.isRequired
};


export default Story;
