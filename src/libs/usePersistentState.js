import { useState, useEffect } from 'react';

//Make a hook that works exactly like useState - same interface as useState so that in app, can change useState to usePersistentState
//Going to use it wherever we use useState in the App

//takes initial state in as argument
//also takes in key - now can use many persistent states in the app
export function usePersistentState(initialState, key = 'default_key') {
  //set up the state/setState just like normal state declaration, but with a callback for initial state
  const [state, setState] = useState(() => {
    //useState can take a callback (instead of just an initial state)
    const existingState = localStorage.getItem(key);
    return existingState ? JSON.parse(existingState) : initialState;
  });
  //Need to make sure any existing localState doesn't get overwritten, just added to, using localState.getItem() -> if there is initial stuff in the state localStorage, want to use that as initialState

  useEffect(() => {
    //when state changes, save state to local storage
    //when setting the state in localStorage, need to stringify it because localStorage only takes strings
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  //useState returns an array of the state and the function to change it; can return the array of state and setState to get it initally functioning
  return [state, setState];
}

//----------------------------------------------------
//USEEFFECT RECAP:
//takes callback and dependency array
//no dependency array, runs @ every re-render aka every change of state
//empty dependency array, runs on mount
//specific state in dependency array,
