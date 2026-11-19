import { ecc } from '../StyleClasses.js';

function ExpenseItem({
  expense,
  isEditing,
  handleDeleteExpense,
  handleModifyExpense
}) {
  return (
    <tr className={ecc.i}>
      <td>{expense.description}</td>
      <td>{expense.amount}</td>
      <td>{expense.category}</td>
      {isEditing && (
        <td>
          <div className={ecc.a}>
            <button onClick={() => handleModifyExpense(expense)}>Modify</button>
            <button onClick={() => handleDeleteExpense(expense.id)}>
              Delete
            </button>
          </div>
        </td>
      )}
    </tr>
  );
}

export { ExpenseItem };
