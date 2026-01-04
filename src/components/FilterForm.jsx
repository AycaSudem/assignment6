function FilterForm({ filter, onFilterChange }) {
  return (
    <input
      type="text"
      placeholder="Filter by title..."
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
}

export default FilterForm;
