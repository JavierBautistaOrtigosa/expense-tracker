import { ecc } from '../StyleClasses.js';

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  filteredExpenses
}) {
  return (
    <section className={ecc.c}>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value='All'>All</option>
        <option value='Food'>Food</option>
        <option value='Transport'>Transport</option>
        <option value='Entertainment'>Entertainment</option>
      </select>
      <ul className={ecc.l}>
        {filteredExpenses.map((filteredExpense) => (
          <li className={ecc.i} key={filteredExpense.id}>
            {filteredExpense.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export { CategoryFilter };
