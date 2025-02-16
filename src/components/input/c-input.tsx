// importamos el css
import './c-input.css'

//declaramos los tipos para los props
type InputProps = {
    label: string;
}

const CInput = ({label}: InputProps) => {
    return(
        <div className='c-input'>
            {label && 
            <div className='c-input__label-container'>
                <p className='c-input__label'>{label}</p>
            </div>}
            <input type="text"  className='c-input__input-text'/>
        </div>
    )
}

export default CInput;