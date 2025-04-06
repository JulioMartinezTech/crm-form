//importamos los estilos
import "./v-contact-form.css";

// importamos los componentes
import CInput from "../../components/input/c-input";

const VContactForm = () => {
  return (
    <div className="v-contact-form">
      <h1 className="v-contact-form__title">Contact Info</h1>
      <form action="" className="v-contact-form__form">
        <div className="v-contact-form__input-container">
          <CInput type="email" label="Email" name="email" required />
          <CInput type="phone" label="Phone" name="phone" required />
          <CInput label="Address" name="address" />
          <CInput label="input" name="input" />
        </div>
      </form>
    </div>
  );
};

export default VContactForm;
