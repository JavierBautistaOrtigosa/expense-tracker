import { ecc } from '../StyleClasses.js';
import { ExpenseItem } from './ExpenseItem.jsx';

function ExpenseList({ expenses }) {
  return (
    <section className={ecc.c}>
      {/* <h3 className={ecc.t}>List</h3> */}

      <table className={ecc.l}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export { ExpenseList };
