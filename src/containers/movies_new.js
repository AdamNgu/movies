import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMovie } from '../actions/index';

class MoviesNew extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.addNewMovie = this.addNewMovie.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.addNewMovie}>
          <input
            type="text"
            placeholder="Movie Title"
            onChange={this.onInputChange}
          />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    );
  }

  // TODO: use a constantly updated state to create dynamic warnings
  onInputChange(event) {
    this.setState({ title: event.target.value });
  }

  addNewMovie(event) {
    event.preventDefault();
    this.props.addMovie(this.state.title)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(MoviesNew);
