/**
 * list
 */

import React               from 'react';
import { Menu, MenuItem  } from 'material-ui';
import ListItem            from './ListItem';

export default function ListCollection(args) {
  const lists = args.props.lists;

  if(lists && lists.length) {
    let menuItems = getlistItems(lists);
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

function getlistItems(lists) {
  let
    listItems = [],
    len = lists.length;

  while(len--) {
    listItems.push(
      <ListItem key={'listItem'+len} listItem={lists[len]} checked={true} />
    );
  }
  return listItems;
}

ListCollection.propTypes = {
  hintText: React.PropTypes.string,
  type    : React.PropTypes.string,
  lists : React.PropTypes.array
};

ListCollection.defaultProps = {
  type: 'text'
}
