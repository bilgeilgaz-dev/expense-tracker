import './ExpenseItem.css';
import './ExpenseDate.js'
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';
import { useState } from 'react';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    console.log('button clicked')
    setTitle('Updated!');
  }

  return (
    <Card className='expense-item'>
      <div>
        <ExpenseDate date={props.date}/>
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
