import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import UserInfo from "../components/ui/UserInfo";

const ApplicationSelTypeEd = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [carrerChoice, setCarrerChoice] = useState<string | null>(null);

  const carrerChoiceList: { value: string; label: string }[] = [
    { value: "undergraduate", label: t("application_2_msg2") },
    { value: "professional", label: t("application_2_msg3") },
    { value: "master", label: t("application_2_msg4") },
    { value: "phd", label: t("application_2_msg5") },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (carrerChoice) {
      navigate(`/application/${id}/form`);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-8 max-w-4xl h-screen m-auto">
      <UserInfo id={id} />
      <form
        id="form"
        className="flex flex-col items-center gap-6"
        onSubmit={(e) => handleSubmit(e)}
        action="submit"
      >
        <h1 className="font-bold dark:text-white-20">
          {t("application_2_msg1")}
        </h1>
        <div className="flex flex-col gap-4">
          {carrerChoiceList.map((item) => (
            <div key={item.value} className="flex">
              <input
                id={item.value}
                type="radio"
                name={item.value}
                value={item.value}
                className="mr-4"
                checked={carrerChoice === item.value}
                onChange={(e) => setCarrerChoice(e.target.value)}
              />
              <label htmlFor={item.value}>{item.label}</label>
            </div>
          ))}
          <button type="submit" className="btn self-center mt-4">
            {t("application_2_msg6")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationSelTypeEd;
