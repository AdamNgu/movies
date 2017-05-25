import React, { Component } from 'react';
import { connect } from 'react-redux';

// Dynamically generates a new image URL whenever created
export default class ImageBadge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: ''
    };
    console.log("state definition working");
    console.log(this.props.image);
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({ imageURL: reader.result})
    }

    reader.readAsDataURL(this.props.image);

  }

  render() {
    const badgeStyle = {
      maxWidth: this.props.width,
      maxHeight: this.props.height,
      width: "auto",
      height: "auto"
    }

    return(
      <img
        src={this.state.imageURL}
        style={badgeStyle}
        className={"image-badge"}
      />
    );
  }


}
