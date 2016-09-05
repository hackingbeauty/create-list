import React, { Component } from 'react';
import { Popover,
         Menu,
         MenuItem,
         FontIcon,
         Divider }          from 'material-ui';

export default class YoutubePlaylist extends Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      open: false
    };
  }

  display(event) {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }


  close() {
    this.setState({
      open: false,
    });
  }

  render() {
    const
      props = this.props,
      placeholder = getPlaceholder(props),
      playlists = getPlaylists(props);

    return (
      <div className="youtube-playlist">
        <div onTouchTap={this.display}>
          <span className="placeholder">{placeholder}</span>
          <FontIcon className="material-icons">add</FontIcon>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.close} >
            {playlists}
          </Popover>
        </div>
      </div>
    );
  }
}

function getPlaceholder(props) {
  if(props.placeholder) {
    return props.placeholder;
  }
}

function getPlaylists(props) {
  if(props.playlists && props.playlists.length) {
    return (
      <div>
        <Menu>
          <MenuItem primaryText="1" />
          <MenuItem primaryText="2" />
          <MenuItem primaryText="3" />
          <MenuItem primaryText="4" />
        </Menu>
        <Divider />
        <Menu>
          <MenuItem primaryText="Create new playlist" />
        </Menu>
      </div>
    );
  } else {
    return (
      <Menu>
        <MenuItem primaryText="You 0 playlists" />
      </Menu>
    );
  }
}

YoutubePlaylist.propTypes = {
  placeholder : React.PropTypes.string,
  playlists   : React.PropTypes.array
};

YoutubePlaylist.defaultProps = {
  placeholder : 'Add to List'
}

