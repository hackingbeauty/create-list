/**
 * TextInput
 */

import React, { Component} from 'react';
import {
          TextField,
          RaisedButton }    from 'material-ui';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.submitPlaylist = this.submitPlaylist.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.state = {
      playlistName : ''
    }
  }

  onChange(event) {
    this.setState({
      playlistName : event.currentTarget.value
    });
  }

  onKeyPress(event) {
    if(event.key === 'Enter') {
      this.submitPlaylist();
    }
  }

  submitPlaylist() {
    this.props.callback(this.state.playlistName);
    this.setState({
      playlistName : ''
    });
  }

  render() {
    return (
      <div>
        <TextField
          id="textFieldInput"
          autoFocus
          value={this.state.playlistName}
          onKeyPress={this.onKeyPress}
          onChange={this.onChange} />
        <br />
        <RaisedButton
          label="Create"
          primary={true}
          disabled={(this.state.playlistName ? false : true)}
          onTouchTap={this.submitPlaylist}
          className="btn" />
      </div>
    )
  }
}
