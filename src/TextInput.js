/**
 * TextInput
 */

import React, { Component} from 'react';
import { TextField,
        RaisedButton }     from 'material-ui';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.submitList = this.submitList.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.state = {
      listName : ''
    }
  }

  onChange(event) {
    this.setState({
      listName : event.currentTarget.value
    });
  }

  onKeyPress(event) {
    if(event.key === 'Enter') {
      this.submitList();
    }
  }

  submitList() {
    this.props.callback({name: this.state.listName, checked: true});
    this.setState({
      listName : ''
    });
  }

  render() {
    return (
      <div>
        <TextField
          id="textFieldInput"
          autoFocus
          value={this.state.listName}
          onKeyPress={this.onKeyPress}
          onChange={this.onChange} />
        <br />
        <RaisedButton
          label="Create"
          primary={true}
          disabled={(this.state.listName ? false : true)}
          onTouchTap={this.submitList}
          className="btn" />
      </div>
    )
  }
}
