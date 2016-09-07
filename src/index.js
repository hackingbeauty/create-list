import React, { Component } from 'react';
import { Popover,
         Menu,
         MenuItem,
         FontIcon,
         TextField,
         RaisedButton,
         Divider }          from 'material-ui';

export default class YoutubePlaylist extends Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
    this.close = this.close.bind(this);
    this.createNewPlaylist = this.createNewPlaylist.bind(this);
    this.onPlaylistNameEnter = this.onPlaylistNameEnter.bind(this);
    this.state = {
      open                : false,
      createPlaylist      : false,
      playlistNameEntered : 0,
      playlistName        : ''
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.playlistNameEntered === 0;
  }

  display(event) {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  close() {
    this.setState({
      open                : false,
      createPlaylist      : false,
      playlistNameEntered : 0
    });
  }

  createNewPlaylist() {
    this.setState({
      createPlaylist : true
    });
  }

  getPlaylists() {
    const
      self = this,
      props = this.props,
      state = this.state,
      newPlaylistComponent = this.getNewPlaylistComponent();

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
          {newPlaylistComponent}
        </div>
      );
    } else {
      return (
        <Menu>
          <MenuItem primaryText="You 0 playlists" />
          <Divider />
          {newPlaylistComponent}
        </Menu>
      );
    }
  }

  getNewPlaylistComponent() {
    const self = this;

    if(this.state.createPlaylist) {
      return (
        <div className="youtube-playlist-create-new">
          <TextField
            onChange={self.onPlaylistNameEnter}
            hintText="Enter playlist name" />
          <br />
          <RaisedButton
            label="Create"
            primary={true}
            // disabled={(self.state.playlistNameEntered === 0 ? true : false)}
            className="btn" />
        </div>
      );
    } else {
      return (
        <Menu>
          <MenuItem
            primaryText="Create new playlist"
            onTouchTap={self.createNewPlaylist} />
        </Menu>
      );
    }
  }

  onPlaylistNameEnter(event, textInputValue) {
    const self = this;
    this.setState({
      playlistNameEntered : self.state.playlistNameEntered + 1,
      playlistName        : textInputValue
    });
  }

  render() {
    const
      self = this,
      props = this.props,
      playlists = this.getPlaylists();

    return (
      <div className="youtube-playlist">
        <div onTouchTap={this.display}>
          <span className="placeholder">{props.placeholder}</span>
          <FontIcon className="material-icons">add</FontIcon>
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.close}>
            {playlists}
          </Popover>
        </div>
      </div>
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

