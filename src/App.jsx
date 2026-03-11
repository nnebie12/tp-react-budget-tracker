import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

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

  const total = transactions.reduce((acc, item) => 
    item.type === 'income' ? acc + item.amount : acc - item.amount, 0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">Budget Tracker</h1>
          <div className="mt-4 p-6 bg-white rounded-2xl shadow-sm inline-block border">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Solde Total</span>
            <p className={`text-5xl font-mono font-bold ${total >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {total.toFixed(2)}€
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Ajouter</h2>
            <TransactionForm onAddTransaction={addTransaction} />
          </section>

          <section className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Liste des Transactions</h2>
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