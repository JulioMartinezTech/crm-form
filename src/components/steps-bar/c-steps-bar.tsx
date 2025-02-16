//importamos dependencias

//definimos los tipos para los props
type currentStep = {
    step: number;
}

//importamos css
import './c-steps-bar.css'

const CStepsBar = ({step}: currentStep) => {
    return(
        <div className='c-steps-bar'>
            <div className='c-steps-bar__current-step'>1</div>
            <div className={step >= 2 ? 'c-steps-bar__current-step-separator' : 'c-steps-bar__step-separator'}></div>
            <div className={step >= 2 ? 'c-steps-bar__current-step' : 'c-steps-bar__step'}>2</div>
            <div className={step === 3 ? 'c-steps-bar__current-step-separator' : 'c-steps-bar__step-separator'}></div>
            <div className={step === 3 ? 'c-steps-bar__current-step' : 'c-steps-bar__step'}>3</div>
        </div>
    )
}

export default CStepsBar