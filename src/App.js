import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ExpenseList from "./components/ExpenseList.js";
import ExpenseDetails from "./components/ExpenseDetails.js";
import ExpenseForm from "./components/ExpenseForm.js";
import Home from "./components/Home.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/expenses">Expenses</Link>
            </li>
            <li>
              <Link to="/expenses/create-expense">Create new expense</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<ExpenseList />} />
          <Route path="/expenses/:id" element={<ExpenseDetails />} />
          <Route path="/expenses/create-expense" element={<ExpenseForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
