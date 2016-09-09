/**
 * Playlist
 */

import React                from 'react';
import { Menu as MUIMenu  } from 'material-ui';
import ListItem             from './ListItem';

export default function ListCollection(args) {
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
      <ListItem key={'listItem'+len} listItem={playlists[len]} checked={true} />
    );
  }
  return playlistItems;
}

ListCollection.propTypes = {
  hintText: React.PropTypes.string,
  type    : React.PropTypes.string,
  playlists : React.PropTypes.array
};

ListCollection.defaultProps = {
  type: 'text'
}
