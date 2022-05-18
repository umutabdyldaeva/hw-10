import { useState } from 'react'
import classes from './Form.module.css'

const Form = (props) => {

const [enteredUsername, setEnteredUsername] = useState('');
const [enteredEmail, setEnteredMail] = useState('');
const [enteredPassword, setEnteredPassword] = useState('');

const addUserChangeHandler = (event) => {
    event.preventDefault();
    const obj = {
        enteredUsername,
        enteredEmail,
        enteredPassword,
        id: Math.random().toString(),
        
    }
    
    props.onSaveObject(obj)
}

const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
}

const emailChangeHandler = (event) => {
    setEnteredMail(event.target.value)
}

const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)
}
    return (
        <form className={classes.container} onSubmit={addUserChangeHandler}>
            <h1>Sing In</h1>
            <label htmlFor="username">Username</label>
            <input type='text' id='username' value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor='email'>Email address</label>
            <input type='text' id='email' value={enteredEmail} onChange={emailChangeHandler}/>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' value={enteredPassword} onChange={passwordChangeHandler}/>
            <button>Submit</button>
        </form>
    )
}

export default Form;