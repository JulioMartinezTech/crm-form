//dependencies
import { useForm, SubmitHandler } from "react-hook-form";
//Helper
import { createCompanyAndOccupation } from "../../helpers/occupationHelper";
//types
import { ContactOccupation, PageOnChange } from "../../types/pageTypes";
// components
import CInput from "../../components/input/c-input";
import CButton from "../../components/button/c-button";
import CSelectBox from "../../components/select-box/c-select-box";
import CDatePicker from "../../components/birthdatePicker/c-date-picker";
//css
import "./v-occupation.css";

const VOccupation = ({ onChange }: PageOnChange) => {
  const contactId = Number(sessionStorage.getItem("MonicaContactId"));
  const salaryUnitOptions: { id: string; name: string }[] = [
    {
      id: "year",
      name: "Year",
    },
    {
      id: "month",
      name: "Month",
    },
    {
      id: "day",
      name: "Day",
    },
    {
      id: "hour",
      name: "Hour",
    },
  ];
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm<ContactOccupation>({
    mode: "onChange",
    defaultValues: {
      salary_unit: "",
    },
  });

  const salaryUnitSelected = watch("salary_unit");

  const companyFormat = {
    name: "",
    website: "",
    number_of_employees: 1,
  };

  const onSubmit: SubmitHandler<ContactOccupation> = async (data) => {
    let startDate = "";
    if (data.start_date) {
      startDate = data.start_date.toLocaleString("en-CA", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    }
    const occupationFormat = {
      contact_id: contactId,
      company_id: 0,
      title: data.title,
      description: data.description ? data.description : null,
      salary: data.salary ? Number(data.salary) : null,
      salary_unit: data.salary_unit ? data.salary_unit : null,
      currently_works_here: true,
      start_date: data.start_date ? startDate : null,
      end_date: null,
    };
    companyFormat.name = data.company_name;
    if (data.company_website) {
      companyFormat.website = data.company_website;
    }
    if (data.number_of_employees) {
      companyFormat.number_of_employees = Number(data.number_of_employees);
    }
    await createCompanyAndOccupation(companyFormat, occupationFormat);
    onChange();
  };
  return (
    <div className="v-occupation">
      <h1 className="v-occupation__title">Occupation</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="v-occupation__form">
        <div className="v-occupation__form__cards">
          <div className="v-occupation__input-container">
            <CInput
              type="text"
              label="Company name"
              name="company_name"
              required
              register={register("company_name", {
                required: "Company name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters and spaces are allowed",
                },
              })}
              error={errors.company_name?.message}
            />
            <CInput
              type="text"
              label="Company website"
              name="company_website"
              register={register("company_website", {
                pattern: {
                  value:
                    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/,
                  message: "Only letters and spaces are allowed",
                },
              })}
              error={errors.company_website?.message}
            />
            <CInput
              type="text"
              label="Number of employees in the company"
              name="number_of_employees"
              register={register("number_of_employees", {
                pattern: {
                  value: /^\d+$/,
                  message: "Only numbers are allowed",
                },
              })}
              error={errors.number_of_employees?.message}
            />
            <CDatePicker
              label="Start job date"
              name="start_date"
              error={errors.start_date?.message}
              control={control}
              format="yyyy-MM-dd"
            />
          </div>
          <div className="v-occupation__input-container">
            <CInput
              type="text"
              label="Job title"
              name="title"
              required
              register={register("title", {
                required: "Job title is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters and spaces are allowed",
                },
              })}
              error={errors.title?.message}
            />
            <CInput
              type="text"
              label="Short job description"
              name="description"
              register={register("description", {
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters and spaces are allowed",
                },
              })}
              error={errors.description?.message}
            />
            <CInput
              type="text"
              label="Estimated salary"
              name="salary"
              register={register("salary", {
                pattern: {
                  value: /^\d+$/,
                  message: "Only numbers are allowed",
                },
              })}
              error={errors.salary?.message}
            />
            <CSelectBox
              label="Salary unit"
              options={salaryUnitOptions}
              value={salaryUnitSelected}
              onChange={(value) => setValue("salary_unit", value)}
              placeholder="Select one"
              register={register("salary_unit")}
              error={errors.salary_unit?.message}
            />
          </div>
        </div>
        <CButton type="submit" text="Next" disabled={!isValid} />
      </form>
    </div>
  );
};

export default VOccupation;
