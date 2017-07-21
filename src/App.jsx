import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Story from './components/Story';

export default class extends Component {
  state = {
    page: 'Home'
  }

  constructor(props) {
    super(props)

    this.onNavigate = this.onNavigate.bind(this);
  }

  onNavigate(page, data) {
    var state = Object.assign({
      page: page
    }, data)

    this.setState(state)
  }

  renderHome() {
    return (
      <Home onNavigate={this.onNavigate} />
    )
  }
  // todo : use redux
  // todo : use routing
  // TODO : Virer le mode DEV
  renderStory() {
    return (
      <Story storyId={this.state.storyId} />
    )
  }

  renderPage() {
    var currentPage = this.state.page

    if (currentPage === 'Story')
    {
      return this.renderStory();
    }

    return this.renderHome();
  }

  render() {
    return (
      <div>
        <Header title="Hacker News" />
        {this.renderPage()}
      </div>
    );
  }
}
