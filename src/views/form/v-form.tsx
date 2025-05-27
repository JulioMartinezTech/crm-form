//import dependencies
import { useState } from "react";
// import components
import CStepsBar from "../../components/steps-bar/c-steps-bar";
// import css
import "./v-form.css";
// views
import VUserRegister from "../user-register/v-user-register";
import VContactForm from "../contact-form/v-contact-form";
import VOccupation from "../occupation-form/v-occupation";
import VDocumentsForm from "../documents-form/v-documents-form";

const VForm = () => {
  //declaramos una constante para saber en que step estamos
  const [currentStep, setCurrentStep] = useState<number>(1);

  //declaramos una funcion para manejar el estado de los steps
  const handleNextSteps = () => {
    setCurrentStep(currentStep + 1);
  };
  // const handlePreviousSteps = () => {
  //   setCurrentStep(currentStep - 1);
  // };
  return (
    <div className="v-form">
      <div className={"v-form__left-side"}>
        <div className="v-form__left-side__steps-container">
          <div className="v-form__left-side__title-container">
            <h1 className="v-form__left-side__title">STEPS</h1>
          </div>
          <CStepsBar step={currentStep} />
        </div>
      </div>
      <div className="v-form__right-side">
        <div className="v-form__view-step">
          {currentStep === 1 && (
            <VUserRegister onChange={() => handleNextSteps()} />
          )}
          {currentStep === 2 && (
            <VContactForm onChange={() => handleNextSteps()} />
          )}
          {currentStep === 3 && (
            <VOccupation onChange={() => handleNextSteps()} />
          )}
          {currentStep === 4 && <VDocumentsForm />}
        </div>
      </div>
    </div>
  );
};

export default VForm;
