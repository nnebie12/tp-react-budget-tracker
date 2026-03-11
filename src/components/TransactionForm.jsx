import { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    type: 'income'
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title.trim() === "" || formData.amount === "") {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (parseFloat(formData.amount) <= 0) {
      setError("Le montant doit être supérieur à 0.");
      return;
    }

    const newTransaction = {
      id: Date.now(), 
      title: formData.title,
      amount: parseFloat(formData.amount),
      type: formData.type,
      date: new Date().toLocaleDateString('fr-FR')
    };

    onAddTransaction(newTransaction);

    setFormData({ title: '', amount: '', type: 'income' });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-md space-y-4 border border-gray-100">
      
      {error && (
        <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
          {error}
        </div>
      )}

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-1">Titre</label>
        <input 
          type="text" 
          name="title" 
          placeholder="Ex: Salaire, Loyer..."
          value={formData.title} 
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-1">Montant (€)</label>
        <input 
          type="number" 
          name="amount" 
          placeholder="0.00"
          value={formData.amount} 
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-1">Type</label>
        <select 
          name="type" 
          value={formData.type} 
          onChange={handleChange} 
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-200 outline-none cursor-pointer"
        >
          <option value="income">Revenu (+)</option>
          <option value="expense">Dépense (-)</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg shadow-lg active:scale-95 transition-all"
      >
        Ajouter la transaction
      </button>
    </form>
  );
}

export default TransactionForm;