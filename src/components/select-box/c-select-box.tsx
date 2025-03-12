import { FC } from "react";
import { UseFormRegisterReturn } from 'react-hook-form';

//importamos el css
import './c-select-box.css'

type SelectBoxProps = {
  options: { id: number; name: string; disabled?: boolean }[];
  value: number | string;
  onChange: (value: number) => void;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  error?: string;
  register?: UseFormRegisterReturn;
};

const CSelectBox: FC<SelectBoxProps> = ({ options, value, onChange, label, disabled, placeholder, required, error, register }) => {
  return (
    <div className="c-select-box">
      {label && <label className="c-select-box__label">{label} {required ? <strong className='c-select-box__label-required-indicator'>*</strong> : ""}</label>}
      <select
        className="c-select-box__select-input"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
        {...register}
      >
        {placeholder && <option value={""} disabled hidden>{placeholder}</option>}
        {options.map((option) => (
          <option key={option.id} value={option.id} disabled={option.disabled}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <p className='c-select-box__error-message'>{error}</p>}
    </div>
  );
};

export default CSelectBox;