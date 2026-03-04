import { useState } from 'react';

export function useTransaction() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return {
    transactions,
    addTransaction
  };
}
