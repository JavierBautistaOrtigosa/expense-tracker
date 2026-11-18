import { ExpenseItem } from './ExpenseItem.jsx';

function ExpenseList({ expenses }) {
  return (
    <>
      {/* List Section */}
      <h3>List</h3>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ul>
    </>
  );
}

export { ExpenseList };
