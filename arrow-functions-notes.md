State:

- expenses
- selectedCategory

Derived:

- filteredExpenses
- totalSpent
- expenseCount
- categoryTotals

# Formas válidas y equivalentes para actualizar un objeto en React

Supongamos que tienes este estado:

```jsx
const [expense, setExpense] = useState({
  name: '',
  cost: ''
});
```

Y quieres actualizar solo `cost` sin perder `name`.

---

## ✅ Opción 1: Arrow function con retorno implícito (recomendada)

```jsx
setExpense((prev) => ({
  ...prev,
  cost: e.target.value
}));
```

---

## ✅ Opción 2: Arrow function con return explícito

```jsx
setExpense((prev) => {
  return {
    ...prev,
    cost: e.target.value
  };
});
```

---

## ✅ Opción 3: Función tradicional

```jsx
setExpense(function (prev) {
  return {
    ...prev,
    cost: e.target.value
  };
});
```

---

# Equivalencia

Las cinco opciones anteriores hacen exactamente lo mismo:

1. Obtienen el estado anterior (`prev`).
2. Copian todas sus propiedades mediante `...prev`.
3. Sobrescriben la propiedad `cost`.
4. Devuelven el nuevo objeto a React.

---

# Regla mental para Arrow Functions

## Retorno implícito

Cuando escribes:

```jsx
(x) => x + 1;
```

JavaScript devuelve automáticamente:

```jsx
x + 1;
```

También funciona con objetos si los envuelves en paréntesis:

```jsx
(x) => ({
  value: x + 1
});
```

---

## Retorno explícito

Cuando escribes:

```jsx
(x) => {
  return x + 1;
};
```

Las llaves indican un bloque de código.

Debes usar `return`.

---

# El truco que usan todos en React

Si quieres devolver un objeto:

```jsx
(prev) => ({
  ...prev,
  cost: e.target.value
});
```

Piensa:

> "Abro paréntesis porque voy a devolver un objeto."

---

# Formas incorrectas

## ❌ Falta el return

```jsx
setExpense(prev => {
  ...prev,
  cost: e.target.value
});
```

JavaScript interpreta las llaves como un bloque de código y no devuelve nada.

Equivale a:

```jsx
setExpense((prev) => {
  return undefined;
});
```

---

## ❌ Intentar devolver un objeto sin envolverlo en ()

```jsx
setExpense((prev) => {
  cost: e.target.value;
});
```

JavaScript interpreta `cost:` como una etiqueta (label), no como una propiedad de objeto.

---

## ❌ Sintaxis inválida

```jsx
setExpense(prev => ...prev, cost: e.target.value);
```

Genera error de sintaxis.

---

# Resumen para memorizar

✅ Devolver objeto de forma corta:

```jsx
(prev) => ({
  ...prev,
  cost: e.target.value
});
```

✅ Devolver objeto de forma larga:

```jsx
(prev) => {
  return {
    ...prev,
    cost: e.target.value
  };
};
```

❌ Nunca:

```jsx
prev => {
  ...prev,
  cost: e.target.value
}
```

Porque las llaves `{}` después de `=>` significan bloque de código, no objeto.
