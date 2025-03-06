import style from './Input.module.css';

function Input ({type, text, name, id, placeholder, value}) {
    return(

        <div className={style.form_control}>
        
        <label htmlFor={name}>{text}</label>
        <Input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value} />
        
        </div>
    )
}

export default Input;