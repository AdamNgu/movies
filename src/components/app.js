import React, { Component } from 'react';

import MoviesNew from '../containers/movies_new';
import MoviesIndex from '../containers/movies_index';
import MovieShow from '../containers/movie_show';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newMovieModalisOpen: false,
      currentMovieSelected: '',
      showMovieModalisOpen: false
    }
    this.openNewMovieModal = this.openNewMovieModal.bind(this);
    this.closeNewMovieModal = this.closeNewMovieModal.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
    this.closeMovieShowModal = this.closeMovieShowModal.bind(this);
  }

  openNewMovieModal() {
    this.setState({newMovieModalisOpen: true});
  }

  closeNewMovieModal() {
    this.setState({newMovieModalisOpen: false});
  }

  selectMovie(movieIndex) {
    this.setState({
      showMovieModalisOpen: true,
      currentMovieSelected: movieIndex
    });
  }

  closeMovieShowModal() {
    this.setState({showMovieModalisOpen: false});
  }

  render() {
    return (
      <div>
        <header>
          <h2>My Movie Collection</h2>
          <button
            className="btn btn-default open-new-movie-modal"
            onClick={this.openNewMovieModal}
          >
            Add a movie
          </button>
        </header>
        <MoviesNew
          isOpen={this.state.newMovieModalisOpen}
          close={this.closeNewMovieModal}
        />
        <MoviesIndex selectMovie={this.selectMovie}/>
        <MovieShow
          isOpen={this.state.showMovieModalisOpen}
          close={this.closeMovieShowModal}
          selectedMovieIndex={this.state.currentMovieSelected}
        />
      </div>
    );
  }
}
