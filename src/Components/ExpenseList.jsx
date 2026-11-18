import { ecc } from '../StyleClasses.js';
import { ExpenseItem } from './ExpenseItem.jsx';

function ExpenseList({ expenses }) {
  return (
    <section className={ecc.c}>
      {/* List Section */}
      <h3 className={ecc.t}>List</h3>
      <ul className={ecc.l}>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ul>
    </section>
  );
}

export { ExpenseList };
