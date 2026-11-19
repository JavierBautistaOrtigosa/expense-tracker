import { ecc } from '../StyleClasses.js';
import { ExpenseItem } from './ExpenseItem.jsx';
import { ExpenseToolbar } from './ExpenseToolbar.jsx';

function ExpenseList({
  expenses,
  selectedCategory,
  setSelectedCategory,
  isEditing,
  setIsEditing,
  handleDeleteExpense,
  handleModifyExpense
}) {
  return (
    <section className={ecc.c}>
      <ExpenseToolbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />

      <div className={ecc.tc}>
        <table className={ecc.l} data-editing={isEditing}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              {isEditing && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                isEditing={isEditing}
                handleDeleteExpense={handleDeleteExpense}
                handleModifyExpense={handleModifyExpense}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export { ExpenseList };
