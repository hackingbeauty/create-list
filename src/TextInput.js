/**
 * Menu
 */

import React, { Component} from 'react';
import { TextField }       from 'material-ui';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <TextField onChange={this.onChange} />
    )
  }
}
