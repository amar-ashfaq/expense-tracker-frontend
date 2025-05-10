import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ExpenseList() {
  const [expenseItems, setExpenseItems] = useState([]);
  console.log("ExpenseList component is rendering");

  // get the expenses
  useEffect(() => {
    fetch("https://localhost:7101/expenses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error occured when getting expenses");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setExpenseItems(data);
      });
  }, []);

  return (
    <div>
      <h1>Expense List</h1>
      <p>All the expenses will be displayed here...</p>
      <div>
        <ul>
          {expenseItems.map((expense) => {
            return (
              <li key={expense.id}>
                <Link to={`/expenses/${expense.id}`}>{expense.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseList;
