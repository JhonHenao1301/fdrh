import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const ApplicationSelTypeEd = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [carrerChoice, setCarrerChoice] = useState<string | null>(null);

  const carrerChoiceList: { value: string; label: string }[] = [
    { value: "undergraduate", label: t("application_2_msg12") },
    { value: "professional", label: t("application_2_msg13") },
    { value: "master", label: t("application_2_msg14") },
    { value: "phd", label: t("application_2_msg15") },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (carrerChoice) {
      navigate(`/application/${id}/form`);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-8 max-w-4xl h-screen m-auto">
      <div className="flex flex-col gap-4 text-left">
        <h1 className="text-lg text-center font-bold dark:text-white-20">
          {t("application_2_msg1")}
        </h1>
        <section className="flex flex-col sm:grid sm:grid-cols-2 gap-x-6 gap-y-4">
          <article className="article-info">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_2_msg2")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
          <article className="article-info">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_2_msg3")}
            </p>
            <p className="font-semibold dark:text-white-10">{id}</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_2_msg4")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_2_msg5")}
            </p>
            <p className="font-semibold dark:text-white-10">info</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_2_msg6")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_2_msg7")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_2_msg8")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_2_msg9")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_2_msg10")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
        </section>
      </div>
      <form
        id="form"
        className="flex flex-col items-center gap-6"
        onSubmit={(e) => handleSubmit(e)}
        action="submit"
      >
        <h1 className="font-bold dark:text-white-20">
          {t("application_2_msg11")}
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
            {t("application_2_msg16")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationSelTypeEd;
