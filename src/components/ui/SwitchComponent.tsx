import { Control, Controller } from "react-hook-form";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Space, Switch } from "antd";

interface RHSwitchProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
}

const SwitchComponent = (props: RHSwitchProps) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      defaultValue={false}
      rules={{
        required: {
          value: true,
          message: "This field is required",
        },
      }}
      render={({ field: { value, onChange } }) => {
        return (
          <Space>
            <Switch
              checked={value}
              onChange={onChange}
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Space>
        );
      }}
    />
  );
};

export default SwitchComponent;
