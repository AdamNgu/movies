import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';

import ImageBadge from '../components/image_badge'
import { deleteMovie, addImage } from '../actions/index';

const modalStyle = {
  content: {
    width: "700px",
    height: "500px",
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
    const activeMovie = this.props.movies[this.props.movieId];

    if(activeMovie){
      console.log("render movie is occuring, activemovie below");
      console.log(activeMovie);

      return(
        <div className="show-movie-modal">
          <div className="show-movie-header">
            <h1>{activeMovie.title}</h1>
            <div className="controls">
              <button
                onClick={() => this.deleteMovie(activeMovie)}>
                Delete this movie</button>
              <label>
                Upload an image
                <input
                  type="file"
                  name="file"
                  className="imageUpload"
                  onChange={(e) => this.handleImageUpload(e)}
                />
              </label>
            </div>
          </div>
          <div className="images">{this.renderImages()}</div>
        </div>
      );
    }
  }

  renderImages() {
    const activeMovie = this.props.movies[this.props.movieId];

    console.log("render images");
    const images = activeMovie.images;
    console.log(images);
    return(images.map((image, index) => {
      console.log("iterating through an image");
      console.log(image);
      return(
        <ImageBadge
          image={image}
          key={index}
          width="200px"
          height="100px"
        />);
    }));
  }

  deleteMovie(movie) {
    this.props.deleteMovie(movie);
    this.props.close();
  }

  // TODO: validate that this is actually an image
  handleImageUpload(e) {
    e.preventDefault();
    let image = e.target.files[0];
    this.props.addImage(this.props.movieId, image);
  }

}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteMovie, addImage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow);
