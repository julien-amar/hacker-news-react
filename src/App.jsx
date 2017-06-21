import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Story from './components/Story';

import { getItem, getTopStories } from './services/fetch';

export default class extends Component {
  state = {
    ids: [],
    stories: [],
    page: 'Home'
  }

  async componentWillMount() {
    const ids = await getTopStories()
    const stories = await Promise.all(
      ids.slice(0, 30).map(getItem)
    )

    this.setState({ids, stories});
  }

  showStory(storyId) {
    this.setState({
      page: 'Story',
      currentId: storyId
    })
  }

  renderHome() {
    return (
      <Home showStory={this.showStory.bind(this)} elements={this.state.stories} />
    )
  }
  // todo : use redux
  // todo : use routing
  // TODO : Virer le mode DEV
  // TODO : Finish it :)
  renderStory() {
    console.log(this.state.currentId);

    return (
      <Story />
    )
  }

  // TODO : Make render'Page' better (use a callback function in state)
  render() {
    return (
      <div>
        <Header title="Hacker News" />
        {this[`render${this.state.page}`]()}
      </div>
    );
  }
}
