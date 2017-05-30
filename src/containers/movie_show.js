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

const errorStyle = {
  content: {
    width: "300px",
    height: "80px",
    margin: "auto auto"
  }
};

class MovieShow extends Component {
  constructor(props){
    super(props);
    this.state = { error: false }
  }

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
          <div className="images">{this.renderImages(activeMovie)}</div>
          <Modal
            isOpen={this.state.error}
            contentLabel="Error"
            style={errorStyle}>
            Incorrect file type uploaded!
            <button onClick={() => this.setState({error: false}) }>Oops</button>
          </Modal>
        </div>
      );
    }
  }

  renderImages(activeMovie) {
    const images = activeMovie.images;
    return(images.map((image, index) => {
      return(
        <ImageBadge
          onClick={ () => {window.open(image, '_blank')} }
          image={image}
          key={index}
          width="200px"
          height="100px"
        />);
    }));
  }

  deleteMovie(movie) {
    this.props.deleteMovie(this.props.selectedMovieIndex);
    this.props.close();
  }

  handleImageUpload(e) {
    e.preventDefault();
    let uploadedFile = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      console.log("image loaded");
      console.log(this.props.selectedMovieIndex);
      console.log(this.props.movies);
      let encodedImage = reader.result;
      this.props.addImage(this.props.selectedMovieIndex, encodedImage);
    }

    if(uploadedFile.type.startsWith("image")) {
      reader.readAsDataURL(uploadedFile);
    }
    else {
      this.setState({error: true})
    }
    e.target.value = '';
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
