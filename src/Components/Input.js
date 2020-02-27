import React from 'react';
import './Input.css';

function Input({ addItem, handleChange }) {
  return (
    <div>
      <input
        className="item-input"
        type="text"
        onChange={handleChange}
        placeholder="Add your next item here"
      />
      <button className="add-button" onClick={addItem}>
        Add Item
      </button>
    </div>
  );
}

export default Input;
