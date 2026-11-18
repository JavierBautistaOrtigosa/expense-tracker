function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  filteredExpenses
}) {
  return (
    <>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value='All'>All</option>
        <option value='Food'>Food</option>
        <option value='Transport'>Transport</option>
        <option value='Entertainment'>Entertainment</option>
      </select>
      {filteredExpenses.map((filteredExpense) => (
        <li key={filteredExpense.id}>{filteredExpense.description}</li>
      ))}
    </>
  );
}

export { CategoryFilter };
