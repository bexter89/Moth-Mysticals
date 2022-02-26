
import React, { createContext, useState } from 'react';
import NavBar from './NavBar'

export const DisplayContext = createContext();

export const DisplayProvider = (props) => {
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
