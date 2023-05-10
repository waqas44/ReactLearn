import React from "react";

import Expenses from "./Expenses";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {


    if (props.items.length == 0) {
        return <h2 className="abc" > Nothing found </h2>

    }

    return (
        <ul className="ac">
            {props.items.map((expense) =>
            (<ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
            ))}
        </ul>



    );
};

export default ExpensesList;