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
  callback(newListObj) {
    console.log('newListObj is: ', newListObj);
  },

  render() {
    const list = [
      {name : 'DMT',        checked : true},
      {name : 'TWIN PEAKS', checked : false},
      {name : 'SHARON STONE'}];

    return <MuiThemeProvider>
      <div>
        <AppBar title="List" />
        <div className="container">
          <CreateList
            callback={this.callback}
            lists={list} />
        </div>
      </div>
    </MuiThemeProvider>
  }
});

render(<Demo/>, document.querySelector('#demo'))
