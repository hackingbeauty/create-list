import React                from 'react';
import {render}             from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppBar,
         MuiThemeProvider } from 'material-ui';
import YoutubePlaylist      from '../../src/YoutubePlaylist';

injectTapEventPlugin();

import '../../styles/app.scss';
import './styles/demo-page-styles.scss';

const Demo = React.createClass({
  callback(newPlaylist) {
  },

  render() {
    const playlists = ['DMT','TWIN PEAKS','SHARON STONE'];
    return <MuiThemeProvider>
      <div>
        <AppBar title="Youtube Playlist" />
        <div className="container">
          <YoutubePlaylist
            callback={this.callback}
            playlists={playlists} />
        </div>
      </div>
    </MuiThemeProvider>
  }
});

render(<Demo/>, document.querySelector('#demo'))
