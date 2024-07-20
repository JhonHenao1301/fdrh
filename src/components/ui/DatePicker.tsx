import { DatePicker } from "antd";
import { Controller, Control } from "react-hook-form";
import dayjs from "dayjs";

interface RHFDatePickerFieldProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
}

const DatePickerComponent = (props: RHFDatePickerFieldProps) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: {
          value: true,
          message: "This field is required",
        },
      }}
      render={({ field, fieldState }) => {
        return (
          <>
            <DatePicker
              placeholder={props.placeholder}
              status={fieldState.error ? "error" : undefined}
              ref={field.ref}
              name={field.name}
              onBlur={field.onBlur}
              value={field.value ? dayjs(field.value) : null}
              onChange={(date) => {
                field.onChange(date ? date.valueOf() : null);
              }}
            />
            {fieldState.error ? (
              <span className="text-sm text-red-20 text-start">
                {fieldState.error.message}
              </span>
            ) : null}
          </>
        );
      }}
    />
  );
};

export default DatePickerComponent;
