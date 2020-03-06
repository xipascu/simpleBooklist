import React, { useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSumbit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }
  return ( 
    <form onSubmit={ handleSumbit }>
      <input type="text" placeholder="Enter book title" value={ title }
        onChange={ (e) => setTitle(e.target.value) } required/>
      <input type="text" placeholder="Enter book author" value={ author }
        onChange={ (e) => setAuthor(e.target.value) } required/>
      <input type="submit" value="Add book to list" />
    </form>
   );
}
 
export default NewBookForm; 