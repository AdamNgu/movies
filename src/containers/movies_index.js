import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMovie } from '../actions/index';

class MoviesIndex extends Component {
  renderIndex() {
    return this.props.movies.map((movie) => {
      return(
        <div class="movieItem" key={movie.id}>
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


}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}


export default connect(mapStateToProps, null)(MoviesIndex);
