import { useState } from "react";

function ExpenseForm({ expenses, addExpenseHandler }) {
  const [newExpense, setNewExpense] = useState({
    name: "",
    cost: "",
  });

  const saveExpenseHandler = (e) => {
    e.preventDefault();

    const expenseToSave = {
      ...newExpense,
      id: Date.now(),
    };

    addExpenseHandler(expenseToSave);

    setNewExpense({
      name: "",
      cost: "",
    });
  };

  return (
    <>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name} - {expense.cost}
          </li>
        ))}
      </ul>

      <h1>Expense Form</h1>

      <form onSubmit={saveExpenseHandler}>
        <input
          placeholder="Name"
          value={newExpense.name}
          onChange={(e) =>
            setNewExpense((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />

        <br />
        <br />

        <input
          placeholder="Cost"
          value={newExpense.cost}
          onChange={(e) =>
            setNewExpense((prev) => ({
              ...prev,
              cost: e.target.value,
            }))
          }
        />

        <br />
        <br />

        <button type="submit">Save</button>
      </form>
    </>
  );
}

export { ExpenseForm };

/* *** IMPORTANTE *** 
// Como pasamos de este codigo a la solucion que genera Copilot?

import { useState } from "react";

function ExpenseForm({ expenses, addExpenseHandler }) {
  // Local state
  const [newExpense, setNewExpense] = useState({});
  console.log(newExpense);

  const saveExpenseHandler = (e) => {
    e.preventDefault();

    addExpenseHandler(newExpense);

    const expenseToSave = { ...newExpense, id: Date.now() };
  };

  return (
    <>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name} - {expense.cost}
          </li>
        ))}
      </ul>

      <h1>Expense form</h1>
      <form onSubmit={saveExpenseHandler}>
        <input onChange={(e) => setNewExpense((prev) => ({ ...prev, name: e.target.value }))} />
        <br />
        <br />
        <input onChange={(e) => setNewExpense((prev) => ({ ...prev, cost: e.target.value }))} />
        <br />
        <br />
        <button type="submit">Click</button>
      </form>
    </>
  );
}

export { ExpenseForm };

*/
