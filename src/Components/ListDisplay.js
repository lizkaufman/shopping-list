import React from 'react';
import './ListDisplay.css';

function ListDisplay({ currentList }) {
  //Need to map over currentList and make a li for each thing in the array:
  return (
    <ul>
      {currentList.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export default ListDisplay;
