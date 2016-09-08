/**
 * ListItem
 */

import React, { Component } from 'react';
import { MenuItem,
         Checkbox }         from 'material-ui';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.checkTheBox = this.checkTheBox.bind(this);
    this.state = {
      checked : false
    }
  }

  checkTheBox() {
    this.setState({
      checked: true
    });
  }

  render() {
    return(
      <MenuItem
        onTouchTap={this.checkTheBox}
        className="listItem">
        <Checkbox className='listCheckbox' checked={this.state.checked} />
        <span className="listName">{this.props.listItem}</span>
      </MenuItem>
    );
  }

}