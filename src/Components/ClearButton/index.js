import React from 'react';
import './ClearButton.css';
import shoppingcartrefresh from './shoppingcartrefresh.svg';

function ClearButton({ clearList }) {
  return (
    <img
      src={shoppingcartrefresh}
      className="clear-button"
      alt="shopping cart icon"
      onClick={clearList}
    />
  );
}

export default ClearButton;

// <button className="clear-button" onClick={clearList}>
// Clear List
// </button>
