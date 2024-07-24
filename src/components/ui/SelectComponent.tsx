import { Select, Space } from "antd";
import { Control, Controller } from "react-hook-form";

interface RHSelectProps {
  control: Control<any>;
  name: string;
  valueArray: { value: string; label: string }[];
}

const SelectComponent = (props: RHSelectProps) => {
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
      render={({ field: { onChange } }) => {
        return (
          <Space>
            <Select
              onChange={onChange}
              style={{ width: 180, height: 40 }}
              options={props.valueArray}
            />
          </Space>
        );
      }}
    />
  );
};

export default SelectComponent;
