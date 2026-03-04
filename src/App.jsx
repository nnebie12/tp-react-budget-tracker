import React, { useState } from 'react';
import TransactionForm from '../src/components/TransactionForm';


function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const total = transactions.reduce((acc, item) => 
    item.type === 'income' ? acc + Number(item.amount) : acc - Number(item.amount), 0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">My Budget Tracker</h1>
          <p className="text-gray-500">Total Balance: 
            <span className={`font-mono font-bold ml-2 ${total >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {total}€
            </span>
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">New Transaction</h2>
            <TransactionForm onAdd={addTransaction} />
          </section>
        </div>
        
      </div>
    </div>
  );
}

export default App;