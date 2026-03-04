import { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    type: 'income'
  });

  const [error, setError] = useState({});

  const validate = () => {
    const newErrors = {}; 
    if (!formData.title.trim()) newErrors.title = 'Le titre est requis';
    if (!formData.amount || isNaN(formData.amount) || Number(formData.amount) <= 0) {
      newErrors.amount = 'Entrez un montant valide';
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    setFormData({ title: '', amount: '', type: 'income' }); 
    setError({});
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-md space-y-4 border border-gray-100">
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-1">Titre</label>
        <input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleChange}
          className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${error.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'}`}
        />
        {error.title && <span className="text-xs text-red-500 mt-1">{error.title}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-1">Montant</label>
        <input 
          type="number" 
          name="amount" 
          value={formData.amount} 
          onChange={handleChange}
          className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${error.amount ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'}`}
        />
        {error.amount && <span className="text-xs text-red-500 mt-1">{error.amount}</span>}
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-1">Type</label>
        <select name="type" value={formData.type} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-200">
          <option value="income">Revenu (+)</option>
          <option value="expense">Dépense (-)</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg shadow-lg active:scale-95 transition-all">
        Ajouter la transaction
      </button>
    </form>
  );
}

export default TransactionForm;