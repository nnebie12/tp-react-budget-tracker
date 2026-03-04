import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  const total = transactions.reduce((acc, item) => 
    item.type === 'income' ? acc + item.amount : acc - item.amount, 0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">Budget Tracker</h1>
          <div className="mt-4 p-6 bg-white rounded-2xl shadow-sm inline-block border">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Solde Total</span>
            <p className={`text-5xl font-mono font-bold ${total >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {total.toFixed(2)}€
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Nouvelle Transaction</h2>
            <TransactionForm onAddTransaction={addTransaction} />
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Historique</h2>
            <div className="space-y-3">
              {transactions.length === 0 ? (
                <p className="text-gray-400 italic border-2 border-dashed p-4 rounded-xl text-center">Aucune transaction.</p>
              ) : (
                transactions.map(t => (
                  <div key={t.id} className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-blue-500 flex justify-between items-center">
                    <span className="font-medium text-gray-700">{t.title}</span>
                    <span className={`font-bold ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                      {t.type === 'income' ? '+' : '-'}{t.amount.toFixed(2)}€
                    </span>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;