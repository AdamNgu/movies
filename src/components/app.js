import React, { Component } from 'react';
// import Modal from 'react-modal';

import MoviesNew from '../containers/movies_new';
import MoviesIndex from '../containers/movies_index';


export default class App extends React.Component {
  constructor() {
    super();
    // TODO: incorporate modal open/close toggle in redux
    this.state = {
      newMovieModalisOpen: false
    }
    this.openNewMovieModal = this.openNewMovieModal.bind(this);
    this.closeNewMovieModal = this.closeNewMovieModal.bind(this);
  }

  openNewMovieModal() {
    this.setState({newMovieModalisOpen: true});
  }

  closeNewMovieModal() {
    this.setState({newMovieModalisOpen: false});
  }

  render() {
    return (
      <div>
        <header>
          <h1>Movies</h1>
          <button onClick={this.openNewMovieModal}>Add a movie</button>
        </header>
        <MoviesNew
          isOpen={this.state.newMovieModalisOpen}
          close={this.closeNewMovieModal}
        />
        <MoviesIndex/>
      </div>
    );
  }
}
