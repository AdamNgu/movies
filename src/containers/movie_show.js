import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    if(this.props.activeMovie){
      return(<div>{this.props.activeMovie.title}</div>);
    }
  }
}

function mapStateToProps(state) {
  return {
    activeMovie: state.activeMovie
  };
}

export default connect(mapStateToProps, null)(MovieShow);
