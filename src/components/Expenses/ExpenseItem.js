import React, { useState } from 'react';


import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [nTitle, updateTitle] = useState(props.title);
  console.log("i am being called");
  const clickHandle = () => {
    // let props.title = "New Title";
    updateTitle('updated title');
    //console.log(props.title);

  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{nTitle}</h2>
        <div className='expense-item__price'>${props.amount}</div>

      </div>
      <button onClick={clickHandle}>Update Title Btn</button>
    </Card>
  );
}

export default ExpenseItem;
