// import dependencies
import { useForm, SubmitHandler } from "react-hook-form";
//import types
import { Contact, PageOnChange } from "../../types/pageTypes";
//API
import { createContact } from "../../api/monicaApi";
//custom Hooks
import { useGenders } from "../../hooks/useGenders";
//import components
import CInput from "../../components/input/c-input";
import CSelectBox from "../../components/select-box/c-select-box";
import CDatePicker from "../../components/birthdatePicker/c-date-picker";
import CButton from "../../components/button/c-button";
//import css
import "./v-user-register.css";

const VUserRegister = ({ onChange }: PageOnChange) => {
  //load genders from API
  const genders = useGenders();

  //Api contact format
  const contactFormat = {
    first_name: "",
    last_name: "",
    nickname: null,
    gender_id: 0,
    birthdate_day: 0,
    birthdate_month: 0,
    birthdate_year: 0,
    is_birthdate_known: true,
    birthdate_is_age_based: false,
    birthdate_age: null,
    is_partial: false,
    is_deceased: false,
    deceased_date_day: null,
    deceased_date_month: null,
    deceased_date_year: null,
    deceased_date_is_age_based: false,
    is_deceased_date_known: false,
  };

  //initialize the react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    watch,
    control,
  } = useForm<Contact>({
    mode: "onChange",
    defaultValues: {
      gender: "",
      birthDate: null,
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<Contact> = (data) => {
    // console.log("Form submitted:", data.birthDate?.getDate());
    contactFormat.first_name = data.firstName;
    contactFormat.last_name = data.lastName;
    contactFormat.gender_id = Number(data.gender);
    contactFormat.birthdate_day = Number(data.birthDate?.getDate());
    contactFormat.birthdate_month = Number(data.birthDate?.getMonth()) + 1;
    contactFormat.birthdate_year = Number(data.birthDate?.getFullYear());
    createContact(contactFormat);
    onChange();
  };
  // Using watcher for update the selectBox value
  const genderSelected = watch("gender");

  return (
    <div className="v-user-register">
      <h1 className="v-user-register__title">User creation</h1>
      <div className="v-user-register__form-container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="v-user-register__form"
        >
          <>
            <div className="v-user-register__form-inputs">
              <CInput
                label="First Name"
                type="text"
                name="first-name"
                required
                register={register("firstName", {
                  required: "First name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Only letters and spaces are allowed",
                  },
                })}
                error={errors.firstName?.message}
              />
              <CInput
                label="Last Name"
                type="text"
                name="last-name"
                required
                register={register("lastName", {
                  required: "Last name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Only letters and spaces are allowed",
                  },
                })}
                error={errors.lastName?.message}
              />
              {/* <CInput
                label="Nickname"
                type="text"
                name="nickName"
                register={register("nickName")}
              /> */}
              <CSelectBox
                label="Gender"
                options={genders}
                value={genderSelected}
                onChange={(value) => setValue("gender", value)}
                placeholder="Select one"
                register={register("gender", {
                  required: "Gender is required",
                })}
                required
                error={errors.gender?.message}
              />
              <CDatePicker
                label="Birthdate"
                name="birthDate"
                required
                error={errors.birthDate?.message}
                control={control}
              />
            </div>
            {/* <div className='v-user-register__form-inputs'>
                        </div> */}
          </>
          <CButton type="submit" text="Next" disabled={!isValid} />
        </form>
      </div>
    </div>
  );
};

export default VUserRegister;
