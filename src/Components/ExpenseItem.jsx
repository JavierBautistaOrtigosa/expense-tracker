import { ecc } from '../StyleClasses.js';

function ExpenseItem({ expense }) {
  return (
    <li className={ecc.i}>
      {expense.description} {expense.amount} {expense.category}
    </li>
  );
}

export { ExpenseItem };
