import React, { Component } from 'react';

import MoviesNew from '../containers/movies_new';
import MoviesIndex from '../containers/movies_index';
import MovieShow from '../containers/movie_show'

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

  selectMovie(movieId) {
    this.setState({
      showMovieModalisOpen: true,
      currentMovieSelected: movieId
    });
  }

  closeMovieShowModal() {
    this.setState({showMovieModalisOpen: false});
  }

  render() {
    return (
      <div>
        <header>
          <h1>Movies</h1>
          <button className="btn btn-default" onClick={this.openNewMovieModal}>Add a movie</button>
        </header>
        <MoviesNew
          isOpen={this.state.newMovieModalisOpen}
          close={this.closeNewMovieModal}
        />
        <MoviesIndex selectMovie={this.selectMovie}/>
        <MovieShow
          isOpen={this.state.showMovieModalisOpen}
          close={this.closeMovieShowModal}
          movieId={this.state.currentMovieSelected}
        />
      </div>
    );



  }
}
