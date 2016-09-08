import React, { Component } from 'react';
import { Popover,
         FontIcon,
         TextField,
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
    this.addPlaylist = this.addPlaylist.bind(this);
    this.state = {
      open           : false,
      createPlaylist : false,
      playlists      : props.playlists
    };
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

  addPlaylist(newPlaylist) {
    let playlists = this.state.playlists;

    playlists.push(newPlaylist);

    this.setState({
      playlists : playlists,
    },function() {
      this.forceUpdate();
    });
  }

  getNewPlaylistComponent() {
    if(this.state.createPlaylist) {
      return (
        <div className="youtube-playlist-create-new">
          <TextInput callback={this.addPlaylist}/>
        </div>
      );
    } else {
      return (
        <Menu>
          <MenuItem
            primaryText="Create new playlist"
            onTouchTap={this.createNewPlaylist} />
        </Menu>
      );
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

