import React from 'react';
import './ClearButton.css';

function ClearButton({ clearList }) {
  return (
    <button className="clear-button" onClick={clearList}>
      Clear List
    </button>
  );
}

export default ClearButton;
