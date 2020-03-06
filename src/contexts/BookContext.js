import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  useState([
    {title: 'The Lean Startup', id:'1'}
    {title: 'Atomic Habits', id:'2'}
  ])
}