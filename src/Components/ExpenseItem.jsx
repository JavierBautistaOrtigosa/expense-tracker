function ExpenseItem({ expense }) {
  return (
    <>
      <li>
        {expense.description} {expense.amount} {expense.category}
      </li>
    </>
  );
}

export { ExpenseItem };
