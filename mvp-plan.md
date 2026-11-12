# Expense Tracker MVP

## Goal

Build a simple Expense Tracker application in React to practice:

- State Management (`useState`)
- Lifting State Up
- Derived State
- Event Handlers
- Props
- Array Methods (`map`, `filter`, `reduce`)
- Spread and Rest Operators
- Component Composition

Estimated development time: **3 hours**

---

# MVP Features

## 1. Add Expense

Users can add a new expense using a form.

### Fields

- Description
- Amount
- Category

### Example

| Description | Amount | Category  |
| ----------- | ------ | --------- |
| Pizza       | 15     | Food      |
| Uber        | 20     | Transport |

---

## 2. Display Expenses

Render a list of all expenses added by the user.

Example:

```text
Pizza        $15
Uber         $20
Netflix      $12
```

---

## 3. Delete Expense

Each expense should include a delete button.

Example:

```text
Pizza $15 [Delete]
```

---

## 4. Filter by Category

Allow users to filter expenses by category.

### Categories

- All
- Food
- Transport
- Entertainment

---

## 5. Summary Section

Display derived information about the current expense list.

### Metrics

- Total Expenses Count
- Total Amount Spent

Example:

```text
Total Expenses: 3
Total Spent: $47
```

---

# Component Structure

```text
App
├── ExpenseForm
├── CategoryFilter
├── ExpenseList
│   └── ExpenseItem
└── ExpenseSummary
```

---

# Component Responsibilities

## App

The parent component.

### State

```jsx
const [expenses, setExpenses] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("all");
```

### Responsibilities

- Store expenses
- Store selected category
- Pass data and callbacks to child components
- Compute derived state

---

## ExpenseForm

### Responsibilities

- Capture user input
- Validate data
- Create new expenses

### Props

```jsx
<ExpenseForm onAddExpense={addExpense} />
```

---

## CategoryFilter

### Responsibilities

- Allow users to select a category filter

### Props

```jsx
<CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
```

---

## ExpenseList

### Responsibilities

- Render filtered expenses

### Props

```jsx
<ExpenseList expenses={filteredExpenses} onDeleteExpense={deleteExpense} />
```

---

## ExpenseItem

### Responsibilities

- Display a single expense
- Handle delete actions

### Props

```jsx
<ExpenseItem expense={expense} onDelete={onDelete} />
```

---

## ExpenseSummary

### Responsibilities

- Display derived metrics
- No internal state

### Props

```jsx
<ExpenseSummary totalSpent={totalSpent} totalExpenses={expenseCount} />
```

---

# React Concepts Practice

## Lifting State Up

Store all shared state inside `App`.

Child components communicate through callback functions.

Example:

```jsx
<ExpenseForm onAddExpense={addExpense} />
```

---

## Event Handlers

Examples:

```jsx
onSubmit={handleSubmit}

onClick={() => onDelete(id)}

onChange={handleCategoryChange}
```

---

## Derived State

Do not store values that can be calculated.

Avoid:

```jsx
const [totalSpent, setTotalSpent] = useState(0);
```

Instead:

```jsx
const totalSpent = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
```

Filter data dynamically:

```jsx
const filteredExpenses = selectedCategory === "all" ? expenses : expenses.filter((expense) => expense.category === selectedCategory);
```

Expense count:

```jsx
const expenseCount = filteredExpenses.length;
```

---

## Spread Operator

Add an expense:

```jsx
setExpenses((prev) => [...prev, newExpense]);
```

Update objects:

```jsx
const updatedExpense = {
  ...expense,
  amount: 50,
};
```

---

## Rest Operator

Reusable input component:

```jsx
function Input({ label, ...props }) {
  return (
    <>
      <label>{label}</label>
      <input {...props} />
    </>
  );
}
```

Usage:

```jsx
<Input label="Description" placeholder="Pizza" />
```

---

# 3-Hour Development Plan

## Hour 1 - Foundation

### 0:00 - 0:20

Project setup.

Tasks:

- Create React project
- Create component structure
- Organize folders

### 0:20 - 1:00

Implement:

- App state
- ExpenseForm
- ExpenseList

Goal:

✅ Add expenses

✅ Display expenses

---

## Hour 2 - State Management

### 1:00 - 1:30

Implement expense deletion.

Goal:

✅ Add expenses

✅ Display expenses

✅ Delete expenses

### 1:30 - 2:00

Implement category filtering.

Goal:

✅ Filter expenses by category

✅ Practice lifting state up

---

## Hour 3 - Derived State & Polish

### 2:00 - 2:30

Implement summary section.

Calculate:

- Total amount spent
- Total expense count

Using:

```jsx
filter();
reduce();
length;
```

---

### 2:30 - 3:00

Add finishing touches.

Tasks:

- Form validation
- Reset form after submit
- Empty-state message

Example:

```text
No expenses found.
```

---

# Bonus Features (If Time Remains)

## Category Totals

Example:

```text
Food: $120
Transport: $45
Entertainment: $90
```

Suggested implementation:

```jsx
const totalsByCategory = expenses.reduce((acc, expense) => {
  acc[expense.category] = (acc[expense.category] || 0) + expense.amount;

  return acc;
}, {});
```

---

## Future Enhancements

- Edit expense
- Local Storage persistence
- Dark Mode
- Monthly statistics
- Expense charts
- Custom categories
- Context API migration
