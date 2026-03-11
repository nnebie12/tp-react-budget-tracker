import React from 'react';

function BudgetProgress({ transactions }) {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);
    
  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);
  
  const total = income + expense;

  const incomePercent = total > 0 ? (income / total) * 100 : 50;

  return (
    <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
      <div className="flex justify-between text-xs font-bold mb-2 dark:text-gray-300">
        <span className="text-green-600 dark:text-green-400">REVENUS ({Math.round(incomePercent)}%)</span>
        <span className="text-red-600 dark:text-red-400">DÉPENSES ({Math.round(100 - incomePercent)}%)</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 flex overflow-hidden">
        <div 
          style={{ width: `${incomePercent}%` }} 
          className="bg-green-500 h-full transition-all duration-500"
        ></div>
        <div 
          style={{ width: `${100 - incomePercent}%` }} 
          className="bg-red-500 h-full transition-all duration-500"
        ></div>
      </div>
    </div>
  );
}

export default BudgetProgress;