import React from 'react';

function Validation(props) {
  let text = 'too short';
  if (props.textLength > 2) {
    text = 'too long';
  }
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default Validation;
