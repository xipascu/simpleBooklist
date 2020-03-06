import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'The Lean Startup', author: 'duno', id:'1'},
    {title: 'Atomic Habits', author: 'duno', id:'2'}
  ])

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }])
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider

