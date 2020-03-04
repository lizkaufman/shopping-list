import React from 'react';
import './ListDisplay.css';

function ListItem({ name, completed, toggleCompleted }) {
  return (
    <li onClick={toggleCompleted} className={completed ? 'strikethru' : ''}>
      {name}
    </li>
  );
}

export default ListItem;
