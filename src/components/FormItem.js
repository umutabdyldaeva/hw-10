import Form from './Form'
import classes from './FormItem.module.css'

const FormItem = (props) => {
    return (
        <div className={classes.wrap}>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.pass}</p>
        </div>
    )

    
}

export default FormItem;