import { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card";
import "./ExpensesList.css";
import ExpensesFilter from "./ExpensesFilter.js";

function ExpensesList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectFilterYear = (year) => {
    console.log("year", year);
    setFilteredYear(year);
    console.log("filteredYear", filteredYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterYear={selectFilterYear}
          selectedYear={filteredYear}
        />
        {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense, index) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={index}
            />
          ))}
      </Card>
    </div>
  );
}

export default ExpensesList;
