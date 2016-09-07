/**
 * Menu
 */

import React                          from 'react';
import { Checkbox,
         Menu as MUIMenu,
         MenuItem as MUIMenuItem } from 'material-ui';

export default function Playlist(args) {
  const playlists = args.props.playlists;

  if(playlists && playlists.length) {
    let menuItems = getPlaylistItems(playlists);
    return (
      <div className="menu">
        <MUIMenu>
          {menuItems}
        </MUIMenu>
      </div>
    );
  } else {
    return (
      <div className="menu">
        <MUIMenu>
          <MUIMenuItem primaryText="You have 0 playlists" />
        </MUIMenu>
      </div>
    );
  }
}

function getPlaylistItems(playlists) {
  let
    playlistItems = [],
    len = playlists.length;

  while(len--) {
    playlistItems.push(
      <MUIMenuItem key={'playlistItem'+len}><Checkbox/>{playlists[len]}</MUIMenuItem>
    );
  }
  return playlistItems;
}

Playlist.propTypes = {
  hintText: React.PropTypes.string,
  type    : React.PropTypes.string,
  playlists : React.PropTypes.array
};

Playlist.defaultProps = {
  type: 'text'
}
