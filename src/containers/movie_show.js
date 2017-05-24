import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteMovie } from '../actions/index';

import Modal from 'react-modal';


const modalStyle = {
  content: {
    width: "300px",
    height: "200px",
    margin: "auto auto"
  }
}

class MovieShow extends Component {
  render() {
    return(
      <Modal
        isOpen={this.props.isOpen}
        contentLabel="Movie"
        onRequestClose={this.props.close}
        style={modalStyle}>
        {this.renderMovie()}
      </Modal>
    );
  }

  renderMovie() {
    const activeMovie = this.props.activeMovie

    if(this.props.activeMovie){
      return(
        <div>
          {activeMovie.title}
          <button
            onClick={() => this.deleteMovie(activeMovie)}>
            Delete this movie</button>
        </div>
      );
    }
  }

  deleteMovie(movie) {
    this.props.deleteMovie(movie);
    this.props.close();
  }

}

function mapStateToProps(state) {
  return {
    activeMovie: state.activeMovie
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow);
