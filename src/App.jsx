import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    category: ''
  });

  const [expenses, setExpenses] = useState([]);

  // Ejecuta console.log(expenses) cada vez que [expenses] cambie
  useEffect(() => {
    console.log(expenses);
  }, [expenses]);
  //   Previo handleSubmit
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     setExpenses((prev) => [...prev, expense]);
  //   }

  // handleSubmit anadiendo un id con Date.now()
  function handleSubmit(e) {
    e.preventDefault();
    setExpenses((prev) => [
      ...prev,
      {
        ...expense,
        id: Date.now()
      }
    ]);

    // Limpiar el formulario tras guardar
    setExpense({
      description: '',
      amount: '',
      category: ''
    });
  }

  return (
    <>
      <h2>Expense Tracker</h2>
      {/* Form Section */}
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
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
        <br />
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
        <br />
        <br />
        <button type='submit'>Save</button>
      </form>
      {/* List Section */}
      <h3>List</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} {expense.amount} {expense.category}
          </li>
        ))}
      </ul>
      {/* Total Section */}
      <h3>Total</h3>
      <p>
        {expenses.reduce((sum, expense) => sum + Number(expense.amount), 0)}
      </p>
    </>
  );
}

// Use onSubmit at the form level instead of onClick on the button
// to preserve native form behavior (e.g. submitting with Enter)
// and improve accessibility.

export default App;
