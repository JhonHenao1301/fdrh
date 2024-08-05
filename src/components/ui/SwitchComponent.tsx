import { Control, Controller } from "react-hook-form";
import {
  CheckOutlined,
  CloseOutlined,
  MoonFilled,
  SunFilled,
} from "@ant-design/icons";
import { Space, Switch } from "antd";

interface RHSwitchProps {
  control: Control<any>;
  name: string;
  onChangeExternal?: (checked: boolean) => void | undefined;
}

const SwitchComponent = (props: RHSwitchProps) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      defaultValue={false}
      render={({ field: { value, onChange } }) => {
        return props.name === "additionalFinancial" ? (
          <Space>
            <Switch
              checked={value}
              onChange={onChange}
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              className="dark:bg-gray-30"
            />
          </Space>
        ) : (
          <Space>
            <Switch
              checked={value}
              onChange={(checked) => {
                onChange(checked);
                if (props.onChangeExternal) props.onChangeExternal(checked);
              }}
              checkedChildren={<MoonFilled />}
              unCheckedChildren={<SunFilled />}
              style={{
                backgroundColor: !value ? "#f9d005df" : "#013cdf",
              }}
            />
          </Space>
        );
      }}
    />
  );
};

export default SwitchComponent;
