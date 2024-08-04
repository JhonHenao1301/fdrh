import { useLocation, useParams } from "react-router-dom";
import { Inputs } from "../types/Inputs";
import { t } from "i18next";
import UserInfo from "../components/ui/UserInfo";
import dayjs from "dayjs";

const ApplicationSent = () => {
  const { id } = useParams();
  const location = useLocation();
  const data: Inputs = location.state;
  const currentDate = dayjs().format("YYYY-MM-DD");

  return (
    <div className="flex flex-col gap-6 p-8 max-w-4xl h-full m-auto">
      <UserInfo id={id} />
      <h1 className="text-lg text-center font-bold mt-4 dark:text-white-20">
        {t("application_3_msg1")}
      </h1>
      <form>
        <div className="flex flex-col gap-6 my-4">
          {/* Date */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_4_msg1")}
            </label>
            <input className="input-standard" value={currentDate} disabled />
          </div>
          {/* Academic program (program) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg2")}
            </label>
            <input className="input-standard" value={data.program} disabled />
          </div>
          {/* Education level (level) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg3")}
            </label>
            <input className="input-standard" value={data.level} disabled />
          </div>
          {/* Justification (description) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg4")}
            </label>
            <input
              className="input-standard"
              value={data.description}
              disabled
            />
          </div>
          {/* Modality (modality)*/}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg5")}
            </label>
            <input className="input-standard" value={data.modality} disabled />
          </div>
          {/* University (institution) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg9")}
            </label>
            <input
              className="input-standard"
              value={data.institution}
              disabled
            />
          </div>
          {/* Period (period) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg10")}
            </label>
            <input className="input-standard" value={data.period} disabled />
          </div>
          {/* Duration program (durationTime - typePeriod) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg11")}
            </label>
            <input
              className="input-standard"
              value={`${data.durationTime} ${data.typePeriod}`}
              disabled
            />
          </div>
          {/* Academic periods (academicPeriods)  */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg16")}
            </label>
            <input
              className="input-standard"
              value={data.academicPeriods}
              disabled
            />
          </div>
          {/* Study leave (studyLeave) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg17")}
            </label>
            <input
              className="input-standard"
              value={data.studyLeave}
              disabled
            />
          </div>
          {/* Current status (status) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg18")}
            </label>
            <input className="input-standard" value={data.status} disabled />
          </div>
          {/* Start date (startDate) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg22")}
            </label>
            <input className="input-standard" value={data.startDate} disabled />
          </div>
          {/* Degree date (degreeDate) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg23")}
            </label>
            <input
              className="input-standard"
              value={data.degreeDate}
              disabled
            />
          </div>
          {/* Total cost (totalCost) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg24")}
            </label>
            <input
              className="input-standard"
              value={`${data.totalCost} USD`}
              disabled
            />
          </div>
          {/* Receive additional financial (additionalFinancial) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg25")}
            </label>
            <input
              className="input-standard"
              value={data.additionalFinancial ? "YES" : "NO"}
              disabled
            />
          </div>
          {/* Support amount (support) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
              {t("application_3_msg26")}
            </label>
            <input
              className="input-standard"
              value={`${data.percentageSupport} %, ${data.cashSupport} USD`}
              disabled
            />
          </div>
        </div>
      </form>
      <div className="h-px bg-gray-20"></div>
      <div className="flex flex-col gap-4 text-justify">
        <h1 className="text-lg font-semibold">{t("application_4_msg2")}</h1>
        <p>{t("application_4_msg3")}</p>
        <div className="flex flex-col gap-2">
          <label className="text-gray-30 text-sm text-start transition-all dark:text-gray-20">
            {t("application_4_msg4")}
          </label>
          <textarea className="input-standard" rows={4} />
          <button className="btn self-center mt-6" onClick={window.print}>
            {t("application_4_msg5")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSent;
