function Filter({ currentFilter, onFilterChange }) {

    const filters = [
    { label: 'Tous', value: 'all' },
    { label: 'Revenus', value: 'income' },
    { label: 'Dépenses', value: 'expense' }
  ];

  return (
    <div className="flex bg-gray-100 p-1 rounded-xl w-fit mb-6 shadow-inner border border-gray-200">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${
            currentFilter === f.value
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;