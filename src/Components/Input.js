import React from 'react';
import './Input.css';

function Input({ addItem, handleChange, value }) {
  return (
    <div>
      <input
        className="item-input"
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Add your next item here"
      />
      <button className="add-button" onClick={addItem}>
        Add Item
      </button>
    </div>
  );
}

export default Input;
