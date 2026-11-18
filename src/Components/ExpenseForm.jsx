import { ecc } from '../StyleClasses.js';

function ExpenseForm({ expense, setExpense, handleSubmit }) {
  return (
    <form className={ecc.c} onSubmit={handleSubmit}>
      <h3 className={ecc.t}>Form</h3>
      <input
        type='text'
        placeholder='Type amount description... '
        value={expense.description}
        onChange={(e) =>
          setExpense((prev) => ({ ...prev, description: e.target.value }))
        }
      />
      <input
        type='number'
        placeholder='Type amount item...'
        value={expense.amount}
        onChange={(e) =>
          setExpense((prev) => ({ ...prev, amount: e.target.value }))
        }
      />
      <select
        value={expense.category}
        onChange={(e) => {
          setExpense((prev) => ({ ...prev, category: e.target.value }));
        }}
      >
        <option value=''>Select category</option>
        <option value='Food'>Food</option>
        <option value='Transport'>Transport</option>
        <option value='Entertainment'>Entertainment</option>
      </select>
      <button className={ecc.b} type='submit'>
        Save
      </button>
    </form>
  );
}

export { ExpenseForm };
