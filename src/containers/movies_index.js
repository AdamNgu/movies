import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ImageBadge from '../components/image_badge';

class MoviesIndex extends Component {
  constructor() {
    super();
    this.selectMovie = this.selectMovie.bind(this);
  }

  renderIndex() {
    return this.props.movies.map((movie, arrayIndex) => {
      const mainBadge = movie.images[0];
      return(
        <div
          className="movie-item"
          key={arrayIndex}
          onClick={() => {this.selectMovie(arrayIndex)}}
        >
          <div className="badge-container">
            <ImageBadge
              image={mainBadge}
              width="200px"
              height="150px"
            />
          </div>
          <h1 className="movie-title">{movie.title}</h1>
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

  selectMovie(arrayIndex) {
    this.props.selectMovie(arrayIndex);
  }

}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}


export default connect(mapStateToProps, null)(MoviesIndex);
