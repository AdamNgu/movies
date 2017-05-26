import React, { Component } from 'react';

// Dynamically generates a new image URL whenever created
export default class ImageBadge extends Component {
  render() {
    const badgeStyle = {
      maxWidth: this.props.width,
      maxHeight: this.props.height,
      width: "auto",
      height: "auto"
    }

    return(
      <img
        src={this.props.image}
        style={badgeStyle}
        className={"image-badge"}
      />
    );
  }
}
