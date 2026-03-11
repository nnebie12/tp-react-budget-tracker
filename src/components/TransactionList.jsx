import TransactionItem from './TransactionItem';

function TransactionList({ transactions, onDeleteTransaction, onEditTransaction }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Montant</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Catégorie</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-10 text-center text-gray-400 italic">
                  Aucune transaction enregistrée pour le moment.
                </td>
              </tr>
            ) : (
              transactions.map((t) => (
                <TransactionItem 
                  key={t.id} 
                  transaction={t} 
                  onDelete={onDeleteTransaction} 
                  onEdit={onEditTransaction} 
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionList;