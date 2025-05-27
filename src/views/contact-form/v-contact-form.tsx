//dependencies
import { useForm, SubmitHandler } from "react-hook-form";
//API
import { createContactField, createAddress } from "../../api/monicaApi";
//types
import { ContactInfo, PageOnChange } from "../../types/pageTypes";
// components
import CInput from "../../components/input/c-input";
import CButton from "../../components/button/c-button";
import CSelectBox from "../../components/select-box/c-select-box";
//hooks
import { useCountries } from "../../hooks/useCountries";
// import { useTags } from "../../hooks/useTags";
//css
import "./v-contact-form.css";

const VContactForm = ({ onChange }: PageOnChange) => {
  const countries = useCountries();
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ContactInfo>({
    mode: "onChange",
    defaultValues: {},
  });

  const contactId = Number(sessionStorage.getItem("MonicaContactId"));

  const emailFormat = {
    contact_field_type_id: 347706,
    data: "",
    contact_id: contactId,
  };
  const phoneFormat = {
    contact_field_type_id: 347707,
    data: "",
    contact_id: contactId,
  };

  const addressFormat = {
    name: "House",
    street: "",
    city: "",
    province: "",
    postal_code: "",
    country: "",
    contact_id: contactId,
  };

  const OnSubmit: SubmitHandler<ContactInfo> = (data) => {
    emailFormat.data = data.email;
    phoneFormat.data = data.phone;
    addressFormat.street = data.street;
    addressFormat.city = data.city;
    addressFormat.province = data.province;
    addressFormat.postal_code = data.postal_code;
    addressFormat.country = data.country;

    //call to API
    createContactField(emailFormat);
    createContactField(phoneFormat);
    createAddress(addressFormat);
    //using custom hook to create and associate tags
    // useTags({ name: data.hobby }, sessionStorage.getItem("MonicaContactId"));

    onChange();
  };
  // Using watcher for update the selectBox value
  const countrySelected = watch("country");
  return (
    <div className="v-contact-form">
      <h1 className="v-contact-form__title">Contact Info</h1>
      <form onSubmit={handleSubmit(OnSubmit)} className="v-contact-form__form">
        <div className="v-contact-form__form__cards">
          <div className="v-contact-form__input-container">
            <CInput
              type="email"
              label="Email"
              name="email"
              required
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "No valid email format",
                },
              })}
              error={errors.email?.message}
            />
            <CInput
              type="phone"
              label="Phone"
              name="phone"
              required
              register={register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^\+?[0-9]{7,15}$/,
                  message: "No valid format",
                },
              })}
              error={errors.phone?.message}
            />
            <CInput
              type="text"
              label="Hobby"
              name="hobby"
              register={register("hobby", {
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters and spaces are allowed",
                },
              })}
              error={errors.hobby?.message}
            />
            <CInput
              type="text"
              label="College name"
              name="college"
              register={register("college", {
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters and spaces are allowed",
                },
              })}
              error={errors.college?.message}
            />
            <CInput
              type="text"
              label="Children's names"
              name="children-names"
              register={register("childrens_names", {
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters and spaces are allowed",
                },
              })}
              error={errors.childrens_names?.message}
            />
          </div>
          <div className="v-contact-form__input-container">
            <CInput
              type="text"
              label="Street address"
              name="street"
              required
              register={register("street", {
                required: "Street address is required",
              })}
              error={errors.street?.message}
            />
            <CSelectBox
              label="Country"
              options={countries}
              value={countrySelected}
              onChange={(value) => setValue("country", value.toString())}
              placeholder="Select one"
              register={register("country", {
                required: "Country is required",
              })}
              required
              error={errors.country?.message}
            />
            <CInput
              type="text"
              label="City"
              name="city"
              required
              register={register("city", {
                required: "City is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters and spaces are allowed",
                },
              })}
              error={errors.city?.message}
            />
            <CInput
              type="text"
              label="Province"
              name="province"
              required
              register={register("province", {
                required: "Province is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters and spaces are allowed",
                },
              })}
              error={errors.province?.message}
            />
            <CInput
              type="text"
              label="Postal code"
              name="postal_code"
              required
              register={register("postal_code", {
                required: "Province is required",
              })}
              error={errors.postal_code?.message}
            />
          </div>
        </div>
        <CButton type="submit" text="Next" disabled={!isValid} />
      </form>
    </div>
  );
};

export default VContactForm;
