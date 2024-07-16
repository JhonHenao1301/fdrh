import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import UserInfo from "../components/ui/UserInfo";

const ApplicationForm = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/application/${id}/form/verification`);
  };

  return (
    <div className="flex flex-col gap-6 p-8 max-w-4xl h-screen m-auto">
      <UserInfo id={id} />
      <form action="submit" onSubmit={handleSubmit}>
        <h1 className="text-lg text-center font-bold dark:text-white-20">
          {t("application_3_msg1")}
        </h1>
        <div className="flex flex-col gap-4 my-4">
          <div className="flex gap-2 justify-between items-center">
            <label className="text-start" htmlFor="program">
              {t("application_3_msg2")}
            </label>
            <input
              type="text"
              name="program"
              id="program"
              className="bg-primary-10 rounded-md w-2/4 px-2 py-1"
            />
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor="level">{t("application_3_msg3")}</label>
            <input
              type="text"
              name="description"
              id="description"
              className="bg-primary-10 rounded-md w-2/4 px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">{t("application_3_msg4")}</label>
            <input
              type="text"
              name="description"
              id="description"
              className="bg-primary-10 rounded-md w-full px-2 py-1"
            />
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor="modality">{t("application_3_msg5")}</label>
            <select name="level" id="level"></select>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor="program">{t("application_3_msg9")}</label>
            <input
              name="program"
              id="program"
              type="text"
              className="bg-primary-10 rounded-md w-2/4 px-2 py-1"
            />
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor="program">{t("application_3_msg10")}</label>
            <input
              name="program"
              id="program"
              type="text"
              className="bg-primary-10 rounded-md w-2/4 px-2 py-1"
            />
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor="program">{t("application_3_msg11")}</label>
            <input
              name="program"
              id="program"
              type="text"
              className="bg-primary-10 rounded-md w-2/4 px-2 py-1"
            />
          </div>
          <button type="submit" className="btn self-center mt-4">
            {t("application_2_msg6")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
