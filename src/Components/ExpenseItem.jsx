import { ecc } from '../StyleClasses.js';

function ExpenseItem({ expense }) {
  return (
    <tr className={ecc.i}>
      <td>{expense.description}</td>
      <td>{expense.amount}</td>
      <td>{expense.category}</td>
    </tr>
  );
}

export { ExpenseItem };
