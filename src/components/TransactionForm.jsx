import { useState } from 'react';

 function TransactionForm({ onAddTransaction }) {
const [formData, setFormData] = useState({
  title: '',
  amount: '',
  type: 'income'
});

const [error, setError] = useState({});

const validate = () => {
  const newError = {...error};
  if (!formData.title) newError.title = 'Title is required';
  if (!formData.amount || isNaN(formData.amount)) newError.amount = 'Valid amount is required';
  setError(newError);
  return Object.keys(newError).length === 0;
}

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const transaction = {
      id: Date.now(),
      title: formData.title,
      amount: parseFloat(formData.amount),
      type: formData.type,
      date: new Date().toISOString()
    };
    onAddTransaction(transaction);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 border border-gray-100">
  <div className="flex flex-col">
    <label className="text-sm font-semibold text-gray-700 mb-1">Title</label>
    <input 
      type="text" 
      name="title" 
      value={formData.title} 
      onChange={handleChange}
      placeholder="e.g. Groceries"
      className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${error.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'}`}
    />
    {error.title && <span className="text-xs text-red-500 mt-1 italic">{error.title}</span>}
  </div>

  <div className="flex flex-col">
    <label className="text-sm font-semibold text-gray-700 mb-1">Amount</label>
    <input 
      type="number" 
      name="amount" 
      value={formData.amount} 
      onChange={handleChange}
      placeholder="0.00"
      className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${error.amount ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'}`}
    />
    {error.amount && <span className="text-xs text-red-500 mt-1 italic">{error.amount}</span>}
  </div>

  <div className="flex flex-col">
    <label className="text-sm font-semibold text-gray-700 mb-1">Type</label>
    <select 
      name="type" 
      value={formData.type} 
      onChange={handleChange}
      className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
    >
      <option value="income text-green-600">Income (+)</option>
      <option value="expense text-red-600">Expense (-)</option>
    </select>
  </div>

  <button 
    type="submit" 
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg shadow-lg transform active:scale-[0.98] transition-all mt-4"
  >
    Add Transaction
  </button>
</form>
  );
}
export default TransactionForm;