import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input/index';
import ListDisplay from './Components/ListDisplay/index';
import ClearButton from './Components/ClearButton/index';
import shoppingcart from './images/shoppingcart.svg';

document.title = 'Shopping List';

const demoList = [
  { name: 'lapsang souchong tea', completed: false },
  { name: 'chocolate', completed: false },
  { name: 'hula hoops', completed: false }
];

function App() {
  //State that holds the list data as an array (starting empty in the actual app; dummy data here)
  //Lives at App level because all the other components 'care about' the list's state
  // const [currentList, changeCurrentList] = useState([
  //   'lapsang souchong tea',
  //   'chocolate',
  //   'hula hoops'
  // ]);
  const [currentList, changeCurrentList] = useState(demoList);

  //State that manages the value of the input field:
  const [value, setValue] = useState('');

  //Function to get the new item from the input field:
  function handleChange(event) {
    setValue(event.target.value);
  }

  //Function to add the new item:
  function addItem() {
    //Use the ... with current list and join up new thing, taken from the value state of the input field:
    changeCurrentList([...currentList, { name: value, completed: false }]);
    //Reset the input field for the next item:
    setValue('');
  }

  //Hand this down to list item to use with an onClick event as a callback function (see pic)
  function toggleCompleted(i) {
    //takes in i, index of the one we want to edit
    console.log(currentList[i]); //check to make sure it's the right item

    //PLAN:
    //-change completed to false on selected item
    //-create new copy of item
    //-change completed to not completed
    //-put into copy of list at correct index
    //-set list to new list

    const newItem = {
      //here's the copy of the new item
      name: currentList[i].name, //name is same as in list
      completed: !currentList[i].completed //flip the completed boolean
    };

    const newList = [
      ...currentList.slice(0, i),
      newItem,
      ...currentList.slice(i + 1)
    ]; //slices everything before and after the original version of the new thing
    changeCurrentList(newList);
  }

  //Function to clear the list:
  function clearList() {
    changeCurrentList([]);
  }

  return (
    <div className="App">
      <img
        src={shoppingcart}
        alt="shopping cart icon"
        className="shopping-cart-img"
      />
      <h1>Shopping List</h1>
      <Input addItem={addItem} handleChange={handleChange} value={value} />
      <ListDisplay
        currentList={currentList}
        toggleCompleted={toggleCompleted}
      />
      <ClearButton clearList={clearList} />
    </div>
  );
}

export default App;
