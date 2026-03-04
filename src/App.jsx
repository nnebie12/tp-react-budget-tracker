import { useState } from 'react'
import './App.css'

function App() {

  const  Transaction = {
  id: 'number',
  title: 'string',
  amount: 'number',
  type: 'income' | 'expense',
  date: 'string'
}
const [transactions, setTransactions] = useState([]);

const addTransaction = (transaction) => {
  setTransactions([...transactions, transaction]);

}

const handleAddTransaction = () => {
  const newTransaction = {
    id: Date.now(),
    title: 'New Transaction',
    amount: 100,
    type: 'income' | 'expense',
    date: new Date().toISOString()
  };
  addTransaction(newTransaction);
};

  return (
    <div className="App">
      <h1>Transaction List</h1>
      <button onClick={handleAddTransaction}>Add Transaction</button>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.title} - {transaction.amount} ({transaction.type})
          </li>
        ))}
      </ul>
    </div>
  )


}
export default App
