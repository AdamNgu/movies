import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
          key={movie.id}
          onClick={() => {this.selectMovie(movie)}}
        >
          Title: {movie.title}
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
    this.props.selectMovie(movie.id);
  }

}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}


export default connect(mapStateToProps, null)(MoviesIndex);
