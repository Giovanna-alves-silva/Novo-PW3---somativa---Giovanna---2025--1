import style from './Input.module.css';

function Input ({type, text, name, id, placeholder, value, handlerChange}) {
    return(

        <div className={style.form_control}>
        
        <label htmlFor={name}>{text}</label>
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value} 
            onChange={handlerChange}/>
        
        </div>
    )
}

export default Input;