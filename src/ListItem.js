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
  }

  checkTheBox() {
    const self = this;
  }

  render() {
    return(
      <MenuItem
        onTouchTap={this.checkTheBox}
        className="listItem">
        <Checkbox
          className='listCheckbox'
          checked={this.props.checked} />
        <span className="listName">{this.props.listItem}</span>
      </MenuItem>
    );
  }

}

ListItem.propTypes = {
  checked: React.PropTypes.bool
};

ListItem.defaultProps = {
  checked: false
};
