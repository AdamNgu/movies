import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';

import ImageBadge from '../components/image_badge';
import { deleteMovie, addImage } from '../actions/index';

const modalStyle = {
  content: {
    width: "700px",
    height: "500px",
    margin: "auto auto"
  }
};

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
    const activeMovie = this.props.movies[this.props.selectedMovieIndex];

    if(activeMovie){
      return(
        <div className="show-movie-modal">
          <div className="show-movie-header">
            <h1>{activeMovie.title}</h1>
            <div className="controls">
              <button
                onClick={() => this.deleteMovie(activeMovie)}
                className="btn"
                style={ {marginRight: "5px"} }
              >
                Delete this movie</button>
              <label>
                <button className="btn">Upload an image</button>
                <input
                  type="file"
                  name="file"
                  className="imageUpload"
                  onChange={(e) => this.handleImageUpload(e)}
                />
              </label>
            </div>
          </div>
          <div className="images">{this.renderImages(activeMovie)}</div>
        </div>
      );
    }
  }

  renderImages(activeMovie) {
    const images = activeMovie.images;
    return(images.map((image, index) => {
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
    const activeMovie = this.props.movies[this.props.selectedMovieIndex];

    let reader = new FileReader();

    reader.onloadend = () => {
      let encodedImage = reader.result;
      this.props.addImage(activeMovie, encodedImage);
    }

    reader.readAsDataURL(image);


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
