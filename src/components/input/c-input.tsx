// import edependencies
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
// import css
import './c-input.css'

//declaring all type props
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    required?: boolean;
    type? : string;
    error? : string;
    register? : UseFormRegisterReturn
    disabled?: boolean;
}

const CInput = ({ label, required, name, type, error, register, disabled,  ...rest}: InputProps) => {
    return(
        <div className='c-input'>
            {label && 
            <div className='c-input__label-container'>
                <p className='c-input__label'>{label} {required ? <strong className='c-input__label-required-indicator'>*</strong> : ""}</p>
            </div>}
            <input  className='c-input__input-text' id={name} name={name} type={type} {...rest} {...register}  disabled={disabled}/>
            {error && <p className='c-input__error-message'>{error}</p>}
        </div>
    )
}

export default CInput;