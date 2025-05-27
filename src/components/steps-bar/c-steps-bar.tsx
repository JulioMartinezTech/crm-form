//prop types
import { CurrentStep } from "../../types/pageTypes";

//importamos css
import "./c-steps-bar.css";

const CStepsBar = ({ step }: CurrentStep) => {
  return (
    <div className="c-steps-bar">
      <div className="c-steps-bar__current-step">
        <div className="c-steps-bar__dot"></div>
      </div>
      <div
        className={
          step >= 2
            ? "c-steps-bar__current-step-separator"
            : "c-steps-bar__step-separator"
        }
      ></div>
      <div
        className={
          step >= 2 ? "c-steps-bar__current-step" : "c-steps-bar__step"
        }
      >
        <div className="c-steps-bar__dot"></div>
      </div>
      <div
        className={
          step >= 3
            ? "c-steps-bar__current-step-separator"
            : "c-steps-bar__step-separator"
        }
      ></div>
      <div
        className={
          step >= 3 ? "c-steps-bar__current-step" : "c-steps-bar__step"
        }
      >
        <div className="c-steps-bar__dot"></div>
      </div>
      <div
        className={
          step === 4
            ? "c-steps-bar__current-step-separator"
            : "c-steps-bar__step-separator"
        }
      ></div>
      <div
        className={
          step === 4 ? "c-steps-bar__current-step" : "c-steps-bar__step"
        }
      >
        <div className="c-steps-bar__dot"></div>
      </div>
    </div>
  );
};

export default CStepsBar;
