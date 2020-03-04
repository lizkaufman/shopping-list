import React from 'react';
import './ListDisplay.css';
import trashcan from '../../images/trashcan.svg';

function ListItem({ name, completed, toggleCompleted, deleteItem }) {
  return (
    <>
      <li onClick={toggleCompleted} className={completed ? 'strikethru' : ''}>
        {name}{' '}
      </li>
      <img
        src={trashcan}
        alt="trashcan-delete-button"
        className="deleteBtn"
        onClick={deleteItem}
      />
    </>
  );
}

export default ListItem;
