import { Select, Space } from "antd";
import { Control, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface RHSelectProps {
  control: Control<any>;
  name: string;
  valueArray: { value: string; label: string }[];
}

const SelectComponent = (props: RHSelectProps) => {
  const { t } = useTranslation();
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
      render={({ field: { onChange }, fieldState }) => {
        return (
          <>
            <Space>
              <Select
                onChange={onChange}
                style={{ width: 250 }}
                options={props.valueArray}
              />
              {fieldState.error ? (
                <span className="text-sm text-red-20 text-start">
                  {fieldState.error.message}
                </span>
              ) : null}
            </Space>
            ;
          </>
        );
      }}
    />
  );
};

export default SelectComponent;
