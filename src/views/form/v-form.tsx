//importamos dependencias
import { useState } from "react"

// importamos componentes
import CStepsBar from "../../components/steps-bar/c-steps-bar"
import CButton from "../../components/button/c-button"

// importamos los estilos
import './v-form.css'

// importamos vistas
import VUserRegister from "../user-register/v-user-register"
import VContactForm from "../contact-form/v-contact-form"
import VDocumentsForm from "../documents-form/v-documents-form"

const VForm = () => {
    //declaramos una constante para saber en que step estamos
    const [currentStep, setCurrentStep] = useState<number>(1)

    //declaramos una funcion para manejar el estado de los steps
    const handleNextSteps = () => {
        setCurrentStep(currentStep+1)
    }
    const handlePreviousSteps = () => {
        setCurrentStep(currentStep-1)
    }
    return(
        <div className="v-form">
            <div className="v-form__left-side">
                <div className="v-form__left-side__title-container">
                    <h1 className="v-form__left-side__title">STEPS</h1>
                </div>
                <CStepsBar step={currentStep}/>
            </div>
            <div className="v-form__right-side">
                <div className="v-form__view-step">
                    {currentStep === 1 && <VUserRegister/>}
                    {currentStep === 2 && <VContactForm/>}
                    {currentStep === 3 && <VDocumentsForm/>}
                </div>
                <div className="v-form__navigation-container">
                    {currentStep >= 2 && <CButton text="Previous" onClickButton={handlePreviousSteps} />}
                    {currentStep <= 2 && <CButton text="Next" onClickButton={handleNextSteps} />}
                </div>
            </div>
        </div>
    )
}

export default VForm