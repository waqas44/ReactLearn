import React, { useState } from 'react';


import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandle = (eventX) => {

        setEnteredTitle(eventX.target.value);
        console.log(eventX.target.value);

    };

    const amountChangeHandle = (eventX) => {

        setEnteredAmount(eventX.target.value);
        console.log(eventX.target.value);

    };

    const dateChangeHandle = (eventX) => {

        setEnteredDate(eventX.target.value);
        console.log(eventX.target.value);

    };
    // const titleChangeHandle = (Xevent) => {
    //     const [enterTitle, setEnterTitle] = useState(Xevent.target.value);
    //     console.log(Xevent.target.value);

    // };

    const submitHandle = (eventX) => {
        eventX.preventDefault();
        //console.log(eventX);
        const NewExpense = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate

        };
        console.log(NewExpense);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandle}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandle} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandle} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
