import React from 'react';
import './ListDisplay.css';
import './ListItem';
import ListItem from './ListItem';

function ListDisplay({ currentList, toggleCompleted, deleteItem }) {
  //Need to map over currentList and make a li for each thing in the array:
  return (
    <ul>
      {currentList.map((item, i) => (
        <ListItem
          name={item.name}
          completed={item.completed}
          toggleCompleted={() => toggleCompleted(i)}
          deleteItem={() => deleteItem(i)}
          key={`${item}${i}`}
        />
      ))}
    </ul>
  );
}

export default ListDisplay;
