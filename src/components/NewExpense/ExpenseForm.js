import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    /* const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }); */

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isFormExpanded, setFormExtended] = useState('');

    const changeTitle = (event) => {
        setEnteredTitle(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredTitle : event.target.value
        }); */
        /* setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        }); */
    };

    const changeAmount = (event) => {
        setEnteredAmount(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredAmount : event.target.value
        }); */
    };

    const changeDate = (event) => {
        setEnteredDate(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredDate : event.target.value
        }); */
    };
    const submitForm = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log('expenseData', expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setFormExtended(false);
    };
    console.log('isFormExpanded', isFormExpanded);

    const expandForm = () => {
        setFormExtended(true);
        console.log('clicked', isFormExpanded)
    }

    const cancelForm = () => {
        setFormExtended(false);
        console.log('clicked', isFormExpanded)
    }

    if(!isFormExpanded){
        return <button onClick={expandForm}>Add new expense</button>
    } else {
        return <form onSubmit={submitForm}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle} 
                        onChange={changeTitle}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type="number" 
                        value={enteredAmount} 
                        min="0.01" step="0.01" 
                        onChange={changeAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type="date" 
                        value={enteredDate} 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        onChange={changeDate}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={cancelForm}>Cancel</button>
                <button type="submit" >Add expense</button>
            </div>
        </form>
    }

    
};

export default ExpenseForm;