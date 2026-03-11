import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Balance from './components/Balance';

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Budget Tracker</h1>
          <p className="text-gray-500">Suivi rigoureux de vos finances personnelles</p>
        </header>

        <Balance transactions={transactions} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Ajouter une opération</h2>
            <TransactionForm onAddTransaction={addTransaction} />
          </section>

          <section className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Détails des mouvements</h2>
            <TransactionList 
              transactions={transactions} 
              onDeleteTransaction={deleteTransaction} 
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;