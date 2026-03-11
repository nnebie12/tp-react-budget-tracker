import React from 'react';
import BudgetProgress from './BudgetProgress'; 

function Balance({ transactions }) {
  const totalIncome = transactions.reduce((acc, t) => 
    t.type === 'income' ? acc + t.amount : acc - t.amount, 0
  );

  const totalExpenses = transactions.reduce((acc, t) => 
    t.type === 'expense' ? acc + t.amount : acc, 0
  );

  const finalBalance = totalIncome - totalExpenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-green-500">
        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total Revenus</span>
        <p className="text-2xl font-bold text-green-600">+{totalIncome.toFixed(2)}€</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-red-500">
        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total Dépenses</span>
        <p className="text-2xl font-bold text-red-600">-{totalExpenses.toFixed(2)}€</p>
      </div>

      <div className="bg-blue-600 p-6 rounded-xl shadow-lg text-white">
        <span className="text-blue-100 text-xs font-bold uppercase tracking-wider">Solde Final</span>
        <p className="text-3xl font-bold font-mono">
          {finalBalance.toFixed(2)}€
        </p>
      </div>
      <BudgetProgress transactions={transactions} />
    </div>
  );
}

export default Balance;