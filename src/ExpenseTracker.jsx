import { useEffect, useState } from 'react';
import { ExpenseForm } from './Components/ExpenseForm.jsx';
import { ExpenseList } from './Components/ExpenseList.jsx';
import { CategoryFilter } from './Components/CategoryFilter.jsx';
import { ExpenseSummary } from './Components/ExpenseSummary.jsx';
import { MOCK_EXPENSES } from './data/mockExpenses.js';

function ExpenseTracker() {
  // =================
  // state -> expense
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    category: ''
  });

  // =================
  // state -> expenses
  const [expenses, setExpenses] = useState(MOCK_EXPENSES);

  // =================
  // state -> selectedCategory
  const [selectedCategory, setSelectedCategory] = useState('');

  // =================
  // derived values -> filteredExpenses
  const filteredExpenses =
    selectedCategory === 'All'
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);
  // -----------------
  // derived values -> totalAmount
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  // =================
  // useEffect -> filteredExpenses
  useEffect(() => {
    console.log(expenses);
  }, [expenses]);

  // =================
  // form onSumit -> handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    setExpenses((prev) => [
      ...prev,
      {
        ...expense,
        id: Date.now()
      }
    ]);
    setExpense({
      description: '',
      amount: '',
      category: ''
    });
  }
  return (
    <div className='expense-tracker'>
      <h2>Expense Tracker</h2>
      <ExpenseForm
        expense={expense}
        setExpense={setExpense}
        handleSubmit={handleSubmit}
      />
      <ExpenseList expenses={filteredExpenses} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filteredExpenses={filteredExpenses}
      />
      <ExpenseSummary totalAmount={totalAmount} />
    </div>
  );
}

export { ExpenseTracker };
