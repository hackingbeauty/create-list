/**
 * list
 */

import React               from 'react';
import { Menu, MenuItem  } from 'material-ui';
import ListItem            from './ListItem';

export default function ListCollection(props) {
  const lists = props.lists;

  if(lists && lists.length) {
    let menuItems = getlistItems(props);

    return (
      <div className="list-menu">
        <Menu>
          {menuItems}
        </Menu>
      </div>
    );
  } else {
    return (
      <div>
        <Menu className="list-menu">
          <MenuItem primaryText="You have 0 lists" />
        </Menu>
      </div>
    );
  }
}

function getlistItems(props) {
  let
    listItems = [],
    lists = props.lists,
    len = props.lists.length;

  while(len--) {
    if(lists[len].checked && lists[len].checked === true) {
      listItems.push(
        <ListItem key={'listItem'+len} listItem={lists[len]} checked={true} callback={props.callback}/>
      );
    } else {
      listItems.push(
        <ListItem key={'listItem'+len} listItem={lists[len]} checked={false} callback={props.callback}/>
      );
    }

  }
  return listItems;
}

ListCollection.propTypes = {
  hintText: React.PropTypes.string,
  type    : React.PropTypes.string,
  lists   : React.PropTypes.array
};

ListCollection.defaultProps = {
  type: 'text'
}
