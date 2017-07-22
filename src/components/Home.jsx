import React, { Component } from 'react';

import Cell from './Cell';
import Columns from './Columns';
import Element from './Element';
import Button from './Button';

import { getItem, getTopStories } from '../services/fetch';

const itemsByPage = 10

const Home = class extends Component {
  state = {
    ids: [],
    stories: [],
    page: 1
  }

  async loadStoriesIndex() {
    const ids = await getTopStories()

    this.setState({ ids })
  }

  async loadStoriesFromPage(page) {
    const currentStories = this.state.stories
    const ids = this.state.ids

    const from = (page - 1) * itemsByPage
    const to = from + itemsByPage

    const newStories = await Promise.all(
      ids.slice(from, to).map(getItem)
    )

    this.setState({ stories: [...currentStories, ...newStories], page })
  }

  async componentWillMount() {
    const currentPage = 1

    await this.loadStoriesIndex()
    await this.loadStoriesFromPage(currentPage)
  }

  showStory = (storyId) => {
    const {onNavigate} = this.props;

    onNavigate('Story', { storyId: storyId });
  }

  showMoreStories = async () => {
    const currentPage = this.state.page

    await this.loadStoriesFromPage(currentPage + 1)
  }

  render() {
    return (
      <div>
        <Columns>
          {this.state.stories.map(story  => (
            <Cell key={story.id}>
              <Element showStory={this.showStory} {...story} />
            </Cell>
          ))}
        </Columns>
        <Button block text="More..." onClick={this.showMoreStories} />
      </div>
    );
  }
}

export default Home;
