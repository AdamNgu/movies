import React, { Component } from 'react';
// import Modal from 'react-modal';

import MoviesNew from '../containers/movies_new';
import MoviesIndex from '../containers/movies_index';
import MovieShow from '../containers/movie_show'

export default class App extends React.Component {
  constructor() {
    super();
    // TODO: incorporate modal open/close toggle in redux
    this.state = {
      newMovieModalisOpen: false,
      // showMovieModalisOpen: false
    }
    this.openNewMovieModal = this.openNewMovieModal.bind(this);
    this.closeNewMovieModal = this.closeNewMovieModal.bind(this);
    this.openMovieShowModal = this.openMovieShowModal.bind(this);
    this.closeMovieShowModal = this.closeMovieShowModal.bind(this);
  }

  openNewMovieModal() {
    this.setState({newMovieModalisOpen: true});
  }

  closeNewMovieModal() {
    this.setState({newMovieModalisOpen: false});
  }

  openMovieShowModal() {
    this.setState({showMovieModalisOpen: true});
  }

  closeMovieShowModal() {
    this.setState({showMovieModalisOpen: false});
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
        <MoviesIndex openMovieShow={this.openMovieShowModal}/>
        <MovieShow
          isOpen={this.state.showMovieModalisOpen}
          close={this.closeMovieShowModal}
        />
      </div>
    );



  }
}
