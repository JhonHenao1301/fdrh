import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import UserInfo from "../components/ui/UserInfo";
import RadioBListComponent from "../components/ui/RadioBListComponent";
import { Alert } from "antd";

type InputNames = {
  typePeriod: string;
};

const ApplicationSelTypeEd = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { handleSubmit, control, watch } = useForm<InputNames>();
  const navigate = useNavigate();
  const [alertActive, setAlertActive] = useState(false);

  const carrerChoiceList: { value: string; label: string }[] = [
    { value: "undergraduate", label: t("application_2_msg2") },
    { value: "professional", label: t("application_2_msg3") },
    { value: "master", label: t("application_2_msg4") },
    { value: "phd", label: t("application_2_msg5") },
  ];

  const onSubmit: SubmitHandler<InputNames> = (data) => {
    if (data.typePeriod) {
      navigate(`/application/${id}/form`, { state: data.typePeriod });
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <Alert
        type="info"
        className="custom-alert"
        message="Informational Notes"
        description={t("application_3_msg27")}
        afterClose={() => setAlertActive(true)}
        banner
        showIcon
        closable
      />
      <div className="flex flex-col gap-6 p-8 max-w-4xl m-auto">
        <UserInfo id={id} />
        <form
          id="form"
          className="flex flex-col items-center gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-bold dark:text-white-20">
            {t("application_2_msg1")}
          </h1>
          <div className="flex flex-col gap-4">
            <RadioBListComponent
              name="typePeriod"
              control={control}
              valueArray={carrerChoiceList}
            />
            {alertActive && (
              <button
                type="submit"
                className="btn self-center mt-4"
                disabled={!watch().typePeriod}
              >
                {t("application_2_msg6")}
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplicationSelTypeEd;
