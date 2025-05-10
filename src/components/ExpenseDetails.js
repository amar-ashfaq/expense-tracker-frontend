import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ExpenseDetails() {
  const { id } = useParams();
  const [expenseItemState, setExpenseItemState] = useState(null);

  useEffect(() => {
    // fetching data
    fetch(`https://localhost:7101/expenses/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error occured when getting expenses");
        }
        return response.json();
      })
      .then((data) => {
        setExpenseItemState(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!expenseItemState) return <p>Loading...</p>;

  return (
    <div>
      <h1>Expense Details</h1>
      <p>Name - {expenseItemState.name}</p>
      <p>Description - {expenseItemState.description}</p>
      <p>Type - {expenseItemState.type}</p>
      <p>Price - £{expenseItemState.price}</p>
    </div>
  );
}

export default ExpenseDetails;
