import React                         from 'react';
import { TextField as MUITextField } from 'material-ui';

export default function TextField(props) {
  return (
    <div className="qbisSearchBox">
      <MUITextField
        hintText={props.placeHolder}
        onEnter={handleChange.bind(this, props)} />
    </div>
  );
}

function handleChange(props, event) {
  let inputValue = event.currentTarget.value;
  debugger;
  props.callback({
    textInputValue: inputValue
  });
}

TextField.propTypes = {
  callback : React.PropTypes.func
};

TextField.defaultProps = {
  placeHolder : 'Enter a playlist'
}
