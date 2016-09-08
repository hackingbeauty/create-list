import React, { Component } from 'react';
import { Popover,
         FontIcon,
         TextField,
         RaisedButton,
         Checkbox,
         Menu,
         MenuItem,
         Divider }          from 'material-ui';
import Playlist             from './Playlist';
import TextInput            from './TextInput';

export default class YoutubePlaylist extends Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
    this.close = this.close.bind(this);
    this.createNewPlaylist = this.createNewPlaylist.bind(this);
    this.onPlaylistNameEnter = this.onPlaylistNameEnter.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
    this.state = {
      open                : false,
      createPlaylist      : false,
      playlistNameCharsNum : 0,
      newPlaylist         : '',
      playlists           : props.playlists
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.playlistNameCharsNum === 0;
  }

  display(event) {
    event.preventDefault();

    this.setState({
      open     : true,
      anchorEl : event.currentTarget
    });
  }

  close() {
    this.setState({
      open                : false,
      createPlaylist      : false,
      playlistNameCharsNum : 0
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
      playlists = {playlists: this.props.playlists},
      newPlaylistComponent = this.getNewPlaylistComponent();

    return (
      <div>
        <Playlist props={playlists} />
        <Divider />
        {newPlaylistComponent}
      </div>
    );
  }

  addPlaylist() {
    let playlists = this.state.playlists;

    playlists.push(this.state.newPlaylist);

    this.setState({
      playlists            : playlists,
      newPlaylist          : '',
      playlistNameCharsNum : 0
    },function() {
      this.forceUpdate();
    });
  }

  getNewPlaylistComponent() {
    const self = this;

    if(this.state.createPlaylist) {
      return (
        <div className="youtube-playlist-create-new">
          <TextInput />
          <br />
          <RaisedButton
            label="Create"
            primary={true}
            onTouchTap={self.addPlaylist}
            // disabled={(self.state.playlistNameCharsNum === 0 ? true : false)}
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

  onPlaylistNameEnter(event) {
    const self = this;

    debugger;

    if(event.key === 'Enter') {
      this.addPlaylist();
    } else {
      this.setState({
        playlistNameCharsNum : self.state.playlistNameCharsNum + 1,
        newPlaylist          : event.currentTarget.value
      });
    }

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
            key="popover"
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

