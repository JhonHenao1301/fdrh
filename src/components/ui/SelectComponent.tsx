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
      defaultValue={props.valueArray[0].value}
      render={({ field: { onChange, value } }) => {
        return (
          <Space>
            <Select
              onChange={onChange}
              style={{ width: 180, height: 40 }}
              options={props.valueArray}
              value={value}
            />
          </Space>
        );
      }}
    />
  );
};

export default SelectComponent;
