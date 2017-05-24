import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMovie } from '../actions/index';

class MoviesIndex extends Component {
  constructor() {
    super();
    this.selectMovie = this.selectMovie.bind(this);
  }

  renderIndex() {
    return this.props.movies.map((movie) => {
      return(
        <div
          className="movieItem"
          key={movie.id}>
          Title: {movie.title}
          <button onClick={() => {this.selectMovie(movie)}}>Click here to select</button>
        </div>
      );
    });
  }

  render() {
    return(
      <div>
        {this.renderIndex()}
      </div>
    );
  }

  selectMovie(movie) {
    console.log("selectMovie");
    this.props.selectMovie(movie);
    this.props.openMovieShow();
  }

}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectMovie: selectMovie }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);
