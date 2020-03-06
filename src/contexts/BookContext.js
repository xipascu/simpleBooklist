import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';
export const BookContext = createContext();
//use reducer instead of useState
const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer( bookReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider

