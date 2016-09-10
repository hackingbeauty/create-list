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

export default class CreateList extends Component {
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
      lists = this.props.lists,
      newlistComponent = this.getNewlistComponent();

    return (
      <div className="list-container">
        <ListCollection lists={lists} callback={this.addlist}/>
        <Divider />
        {newlistComponent}
      </div>
    );
  }

  addlist(newList) {
    const lists = this.state.lists;

    const listExists = lists.find(function(listItem) {
      return listItem.name === newList.name;
    });

    if(!listExists) {
      lists.push(newList);
    }

    this.setState({
      lists : lists,
    },function() {
      this.forceUpdate();
    });

    this.props.callback(newList);
  }

  getNewlistComponent() {
    if(this.state.createList) {
      return (
        <div className="list-create-new">
          <TextInput callback={this.addlist} />
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
      <div>
        <div onTouchTap={this.display} className="list-container">
          <span className="placeholder">{props.placeholder}</span>
          <FontIcon className="material-icons">add</FontIcon>
          <Popover
            className="list-popover"
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

CreateList.propTypes = {
  placeholder : React.PropTypes.string,
  lists       : React.PropTypes.array,
  callback    : React.PropTypes.func.isRequired
};

CreateList.defaultProps = {
  placeholder : 'Add to List'
}

