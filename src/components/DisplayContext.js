
import React, { createContext, useState } from 'react';
import NavBar from './NavBar'

export const DisplayContext = createContext();

export const DisplayProvider = (props) => {
  // Place global state here as needed
  // Ensure that state is also added to the wrapper in the return value
  // To use the context, import { ItemsContext } from this file and
  // set the value equal to the needed state, e.g.:
  // const { isLoggedIn } = useContext(ItemsContext);

  const [displayNav, setDisplayNav] = useState(false);
  const [title, setTitle] = useState('');

  return (
    <>
    {
      displayNav ?
      <nav>
        <NavBar />
      </nav>
      :
      null
    }
    <br/>
    <DisplayContext.Provider
      value={{
        displayNavState: [displayNav, setDisplayNav],
        displayTitleState: [title, setTitle]
      }} >
        {props.children}
    </DisplayContext.Provider>
    </>
  );
};
