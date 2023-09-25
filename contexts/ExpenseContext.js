// contexts/ExpenseContext.js
import React, { createContext, useState } from 'react';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  return (
    <ExpenseContext.Provider value={[expenses, setExpenses]}>
      {children}
    </ExpenseContext.Provider>
  );
};
