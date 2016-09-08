import React                from 'react';
import {render}             from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppBar,
         MuiThemeProvider } from 'material-ui';
import CreateList           from '../../src/CreateList';

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
          <CreateList
            callback={this.callback}
            playlists={playlists} />
        </div>
      </div>
    </MuiThemeProvider>
  }
});

render(<Demo/>, document.querySelector('#demo'))
