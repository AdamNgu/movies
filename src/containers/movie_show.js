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
    const activeMovie = this.props.activeMovie

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
    console.log("render images");
    const images = this.props.activeMovie.images;
    console.log(images);
    return(images.map((image, index) => {
      console.log("iterating through an image");
      console.log(image);
      return(<ImageBadge image={image} key={index}/>);
    }));
  }

  deleteMovie(movie) {
    this.props.deleteMovie(movie);
    this.props.close();
  }

  // TODO: validate that this is actually an image
  handleImageUpload(e) {
    e.preventDefault();

    let reader = new FileReader();
    let image = e.target.files[0];
    console.log(image);


    reader.onloadend = () => {
      console.log(image);
      this.props.addImage(this.props.activeMovie, image);
      // TODO: fix movie_show not rerendering after adding image
    }

    reader.readAsDataURL(image);

  }

}

function mapStateToProps(state) {
  return {
    activeMovie: state.activeMovie
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteMovie, addImage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow);
