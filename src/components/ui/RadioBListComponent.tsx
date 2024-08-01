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
      render={({ field: { onChange, value } }) => {
        return (
          <Radio.Group
            onChange={onChange}
            value={value}
            options={props.valueArray}
            className="radio-button-group"
          ></Radio.Group>
        );
      }}
    />
  );
};

export default RadioBListComponent;
