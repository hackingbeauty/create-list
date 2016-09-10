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
      checked: false
    }
  }

  componentWillMount() {
    this.setState({
      checked: this.props.checked
    });
  }

  checkTheBox() {
    const self = this;

    this.setState({
      checked : !self.state.checked
    });
  }

  render() {
    return(
      <MenuItem
        onTouchTap={this.checkTheBox}
        className="listItem">
        <Checkbox
          className='listCheckbox'
          checked={this.state.checked} />
        <span className="listName">{this.props.listItem.name}</span>
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
