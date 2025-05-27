//dependecies
import { useNavigate } from "react-router-dom";
//import components
import CButton from "../../components/button/c-button";
// css
import "./v-home.css";
//import images
import IFamily from "../../assets/img/family.svg";

const VHome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };

  return (
    <div className="v-home">
      <div className="v-home__left-side-container">
        <img src={IFamily} alt="Family" className="v-home__left-side__img" />
      </div>
      <div className="v-home__right-side-container">
        <div className="v-home__right-side__text-container">
          <p className="v-home__right-side__title">
            Provide your details for a personalized service.
          </p>
          <p className="v-home__right-side__text">
            Your privacy is our priority
          </p>
        </div>
        <CButton text="Let's get started" onClickButton={handleClick} />
      </div>
    </div>
  );
};

export default VHome;
