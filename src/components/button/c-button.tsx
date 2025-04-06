//iport dependecies
import { ButtonHTMLAttributes } from "react";

//importamos el css
import "./c-button.css";

//declaramos el tipo de los props
type CButtonProps = {
  text: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClickButton?: () => void;
};

const CButton = ({ text, type, disabled, onClickButton }: CButtonProps) => {
  return (
    <button
      type={type}
      className="c-button"
      onClick={onClickButton}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CButton;
