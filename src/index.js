import React, { Component } from 'react';

export default class YoutubePlaylist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const
      props = this.props,
      placeholder = getPlaceholder(props);

    return (
      <div>
        <span className="placeholder">{placeholder}</span>
      </div>
    );
  }
}

function getPlaceholder(props) {
  if(props.placeholder) {
    return props.placeholder;
  } else {
    return "Add to List";
  }
}