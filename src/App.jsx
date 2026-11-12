import "./App.css";
import { useState } from "react";
import { ExpenseForm } from "./Components/ExpenseForm.jsx";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Lunch", cost: "35" },
    { id: 2, name: "Dinner", cost: "35" },
  ]);
  const addExpenseHandler = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };
  return (
    <>
      <h1>Hello</h1>
      <ExpenseForm expenses={expenses} addExpenseHandler={addExpenseHandler} />
    </>
  );
}

export default App;
