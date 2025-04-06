// import dependencies
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import styles

// import styles
import "./c-date-picker.css";

// declarate types
type CDatePickerProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  // value?: Date | null,
  required?: boolean;
  error?: string;
  control: Control<T>;
};

const CDatePicker = <T extends FieldValues>({
  label,
  name,
  required,
  error,
  control,
}: CDatePickerProps<T>) => {
  return (
    <div className="c-date-picker">
      {label && <label className="c-date-picker__label">{label}</label>}
      <Controller
        control={control}
        name={name}
        rules={
          required ? { required: `${label || "This field"} is required` } : {}
        }
        render={({ field }) => (
          <DatePicker
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            className="c-date-picker__datePicker"
            dateFormat="MM-dd-yyyy"
            placeholderText="MM-DD-YYYY"
            showMonthYearDropdown
            scrollableMonthYearDropdown
            minDate={new Date(1930, 0, 1)} // Set a minimum selectable date
            maxDate={new Date()}
          />
        )}
      />
      {error && <p className="c-date-picker__error-message">{error}</p>}
    </div>
  );
};

export default CDatePicker;
