function TransactionItem({ transaction, onDelete, onEdit }) {
  const { id, title, amount, type, date } = transaction;

  return (
    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
      <td className="px-6 py-4 text-sm text-gray-500">{date}</td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900">{title}</td>
      <td className={`px-6 py-4 text-sm font-bold ${type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
        {type === 'income' ? '+' : '-'}{amount.toFixed(2)}€
      </td>
      <td className="px-6 py-4 text-sm">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${type === 'income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {type === 'income' ? 'Revenu' : 'Dépense'}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
      <button 
          onClick={() => onEdit(id)}
          className="text-blue-500 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-all"
          title="Modifier"
        >
          ✏️
        </button>
        <button 
          onClick={() => onDelete(id)}
          className="text-red-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all"
          title="Supprimer la transaction"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default TransactionItem;