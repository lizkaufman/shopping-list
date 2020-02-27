import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import ListDisplay from './Components/ListDisplay';
import ClearButton from './Components/ClearButton';

document.title = 'Shopping List';

function App() {
  //State that holds the list data as an array (starting empty in the actual app; dummy data here)
  //Lives at App level because all the other components 'care about' the list's state
  const [currentList, changeCurrentList] = useState([
    'bread',
    'bananas',
    'cheese'
  ]);

  //State that manages the value of the input field:
  const [value, setValue] = useState('');

  //Function to get the new item from the input field:
  function handleChange(event) {
    setValue(event.target.value);
  }

  //Function to add the new item:
  function addItem() {
    //Use the ... with current list and join up new thing, taken from the value state of the input field:
    changeCurrentList([...currentList, value]);
    //Reset the input field for the next item:
    setValue('');
  }

  //Function to clear the list:
  function clearList() {
    changeCurrentList([]);
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <Input addItem={addItem} handleChange={handleChange} value={value} />
      <ListDisplay currentList={currentList} />
      <ClearButton clearList={clearList} />
    </div>
  );
}

export default App;
