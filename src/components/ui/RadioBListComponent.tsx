import { Radio } from "antd";
import { Control, Controller } from "react-hook-form";

interface RBLProps {
  control: Control<any>;
  name: string;
  valueArray: { label: string; value: string }[];
}

const RadioBListComponent = (props: RBLProps) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: {
          value: true,
          message: "Choose one option",
        },
      }}
      render={({ field: { onChange, value }, fieldState }) => {
        return (
          <>
            <Radio.Group
              onChange={onChange}
              value={value}
              options={props.valueArray}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            ></Radio.Group>
            {fieldState.error ? (
              <span className="text-sm text-red-20 text-start">
                {fieldState.error?.message}
              </span>
            ) : null}
          </>
        );
      }}
    />
  );
};

export default RadioBListComponent;
