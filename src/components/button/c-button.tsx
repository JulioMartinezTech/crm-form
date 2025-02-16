//importamos el css
import './c-button.css'

//declaramos el tipo de los props
type CButtonProps = {
    text: string;
    onClickButton: () => void;
}


const CButton = ({text, onClickButton}: CButtonProps) => {
    return(
        <div className="c-button" onClick={onClickButton}>{text}</div>
    )
}

export default CButton