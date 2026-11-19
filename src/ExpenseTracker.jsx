import { useEffect, useState } from 'react';
import { ExpenseForm } from './Components/ExpenseForm.jsx';
import { ExpenseList } from './Components/ExpenseList.jsx';
import { ExpenseSummary } from './Components/ExpenseSummary.jsx';
import { MOCK_EXPENSES } from './data/mockExpenses.js';
import { ecc } from './StyleClasses.js';

function ExpenseTracker() {
  // ---
  // #region - state

  // ---expense
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    category: ''
  });

  // --- expenses
  const [expenses, setExpenses] = useState(MOCK_EXPENSES);

  // --- selectedCategory
  const [selectedCategory, setSelectedCategory] = useState('All');

  // --- isEditing
  const [isEditing, setIsEditing] = useState(false);

  // --- editingExpense
  const [editingExpense, setEditingExpense] = useState(null); // Saber que expense se esta editando actualmente

  // #endregion

  // ---
  // #region - derived values

  // --- filteredExpenses
  const filteredExpenses =
    selectedCategory === 'All'
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);
  // -----------------
  // --- totalAmount
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  //   #endregion

  //   ---
  // #region - useEffect
  useEffect(() => {
    console.log(expenses);
  }, [expenses]);

  // #endregion

  //   ---
  // #region - handlers

  // --- handleSubmit (form)

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     setExpenses((prev) => [
  //       ...prev,
  //       {
  //         ...expense,
  //         id: Date.now()
  //       }
  //     ]);
  //     setExpense({
  //       description: '',
  //       amount: '',
  //       category: ''
  //     });
  //   }

  function handleSubmit(e) {
    e.preventDefault();

    if (editingExpense) {
      console.log('expense:', expense);
      console.log('editingExpense:', editingExpense);
      setExpenses((prev) =>
        prev.map((currentExpense) =>
          currentExpense.id === editingExpense.id ? expense : currentExpense
        )
      );

      setEditingExpense(null);
    } else {
      setExpenses((prev) => [
        ...prev,
        {
          ...expense,
          id: Date.now()
        }
      ]);
    }

    setExpense({
      description: '',
      amount: '',
      category: ''
    });
  }

  // --- handleDeleteExpense (delete expensebutton)

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  // --- handleModifyExpense (modify expense button)

  const handleModifyExpense = (expense) => {
    setExpense(expense);
    setEditingExpense(expense);
  };

  //   #endregion

  return (
    <div className={ecc.et}>
      <h2>Expense Tracker</h2>
      <ExpenseForm
        expense={expense}
        setExpense={setExpense}
        handleSubmit={handleSubmit}
      />
      <ExpenseList
        expenses={filteredExpenses}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleDeleteExpense={handleDeleteExpense}
        handleModifyExpense={handleModifyExpense}
      />
      <ExpenseSummary totalAmount={totalAmount} />
    </div>
  );
}

export { ExpenseTracker };
