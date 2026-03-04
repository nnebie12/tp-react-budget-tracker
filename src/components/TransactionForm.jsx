import { useState } from 'react';

export function TransactionForm({ onAddTransaction }) {
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
    <form onSubmit={handleSubmit} className="transaction-form">
      <div>
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
        {error.title && <span className="error">{error.title}</span>}
      </div>
      <div>
        <label>Amount</label>
        <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
        {error.amount && <span className="error">{error.amount}</span>}
      </div>
      <div>
        <label>Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
}