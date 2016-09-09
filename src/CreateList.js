import React, { Component } from 'react';
import { Popover,
         FontIcon,
         TextField,
         Checkbox,
         Menu,
         MenuItem,
         Divider }          from 'material-ui';
import ListCollection       from './ListCollection';
import TextInput            from './TextInput';

export default class createList extends Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
    this.close = this.close.bind(this);
    this.createNewlist = this.createNewlist.bind(this);
    this.addlist = this.addlist.bind(this);
    this.state = {
      open       : false,
      createList : false,
      lists      : props.lists
    };
  }

  display(event) {
    event.preventDefault();

    this.setState({
      open     : true,
      anchorEl : event.currentTarget
    });
  }

  close() {
    this.setState({
      open           : false,
      createList : false
    });
  }

  createNewlist() {
    this.setState({
      createList : true
    });
  }

  getlists() {
    const
      self = this,
      props = this.props,
      state = this.state,
      lists = {lists: this.props.lists},
      newlistComponent = this.getNewlistComponent();

    return (
      <div>
        <ListCollection props={lists} />
        <Divider />
        {newlistComponent}
      </div>
    );
  }

  addlist(newlist) {
    let lists = this.state.lists;

    lists.push(newlist);

    this.setState({
      lists : lists,
    },function() {
      this.forceUpdate();
    });

    this.props.callback(newlist);
  }

  getNewlistComponent() {
    if(this.state.createList) {
      return (
        <div className="list-create-new">
          <TextInput callback={this.addlist}/>
        </div>
      );
    } else {
      return (
        <Menu>
          <MenuItem
            primaryText="Create new list"
            onTouchTap={this.createNewlist} />
        </Menu>
      );
    }
  }

  render() {
    const
      self = this,
      props = this.props,
      lists = this.getlists();

    return (
      <div className="list">
        <div onTouchTap={this.display}>
          <span className="placeholder">{props.placeholder}</span>
          <FontIcon className="material-icons">add</FontIcon>
          <Popover
            key="popover"
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.close}>
            {lists}
          </Popover>
        </div>
      </div>
    );
  }
}

createList.propTypes = {
  placeholder : React.PropTypes.string,
  lists       : React.PropTypes.array,
  callback    : React.PropTypes.func.isRequired
};

createList.defaultProps = {
  placeholder : 'Add to List'
}

