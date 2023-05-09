import React, { useState } from 'react';


import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [nTitle, updateTitle] = useState(props.title);
  // console.log("i am being called");
  //console.log(nTitle);

  const clickHandle = () => {
    // let props.title = "New Title";
    updateTitle('updated title');
    //console.log(nTitle);
    // console.log(props.title);

  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>

      </div>
      {/* <button onClick={clickHandle}>Update Title Btn</button> */}
    </Card>
  );
}

export default ExpenseItem;
