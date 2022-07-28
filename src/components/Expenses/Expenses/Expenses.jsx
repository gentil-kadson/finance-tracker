import "./Expenses.css";
import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

function Expenses({ expenses }) {
  console.log(expenses);

  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
