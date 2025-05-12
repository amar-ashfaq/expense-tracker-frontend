import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ExpenseDetails() {
  const { id } = useParams();
  const [expenseItemState, setExpenseItemState] = useState(null);
  const navigate = useNavigate();

  const deleteExpense = () => {
    // remove the expense
    fetch(`https://localhost:7101/expenses/${id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete");
        }
        console.log("Deleted expense");
        navigate("/expenses");
      })
      .catch((error) => {
        console.error("Error deleting expense:", error);
      });
  };

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

      <div>
        <button onClick={deleteExpense}>Delete</button>
      </div>
    </div>
  );
}

export default ExpenseDetails;
