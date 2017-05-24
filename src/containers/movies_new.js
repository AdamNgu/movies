import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';

import { addMovie } from '../actions/index';

const modalStyle = {
  content: {
    width: "300px",
    height: "200px",
    margin: "auto auto"
  }
}

class MoviesNew extends Component {
  constructor(props) {
    super(props);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return(
      <Modal
        isOpen={this.props.isOpen}
        contentLabel="New Movie"
        onRequestClose={this.props.close}
        style={modalStyle}
        >
        <form onSubmit={this.addNewMovie}>
          <input
            type="text"
            placeholder="Movie Title"
            onChange={this.onInputChange}
          />
          <button type="submit">Add Movie</button>
        </form>
      </Modal>
    );
  }

  // TODO: use a constantly updated state to create dynamic warnings
  onInputChange(event) {
    console.log(event);
    this.setState({ title: event.target.value });
  }

  addNewMovie(event) {
    event.preventDefault();
    this.props.addMovie(this.state.title);
    this.props.close(); // flows up to app.js to close modal
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(MoviesNew);
