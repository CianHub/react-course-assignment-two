import React from 'react';
import './char.css';

function Char(props) {
  return (
    <p onClick={props.delete} className="box">
      {props.letter}
      <br />
    </p>
  );
}

export default Char;
