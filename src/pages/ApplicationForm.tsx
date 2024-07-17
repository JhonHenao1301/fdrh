import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import UserInfo from "../components/ui/UserInfo";

type Inputs = {
  program: string;
  level: string;
};

const ApplicationForm = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  // const navigate = useNavigate();

  // console.log(errors);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // navigate(`/application/${id}/form/verification`);
  };

  return (
    <div className="flex flex-col gap-6 p-8 max-w-4xl h-screen m-auto">
      <UserInfo id={id} />
      <h1 className="text-lg text-center font-bold dark:text-white-20">
        {t("application_3_msg1")}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 my-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="program"
              className="text-gray-30 text-sm text-start transition-all"
            >
              {t("application_3_msg2")}
            </label>
            <input
              type="text"
              {...register("program", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              className="border-b p-2 border-b-primary-10 rounded-md focus:outline-none focus:border-primary-30 focus:border-b-2 transition-colors"
              autoComplete="off"
            />
            {errors.program && (
              <span className="text-start text-xs text-red-20">
                {errors.program?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="level"
              className="text-gray-30 text-sm text-start transition-all"
            >
              {t("application_3_msg3")}
            </label>
            <input
              {...register("level")}
              className="border-b p-2 border-b-primary-10 rounded-md focus:outline-none focus:border-primary-30 focus:border-b-2 transition-colors"
              disabled
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-gray-30 text-sm text-start transition-all"
            >
              {t("application_3_msg4")}
            </label>
            <input
              type="text"
              className="border-b p-2 border-b-primary-10 rounded-md focus:outline-none focus:border-primary-30 focus:border-b-2 transition-colors"
              {...register("description", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.description && (
              <span className="text-xs text-red-20 text-start">
                {errors.description?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="modality"
              className="text-gray-30 text-sm text-start transition-all"
            >
              {t("application_3_msg5")}
            </label>
            <select
              {...register("modality", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              className="border-b p-2 border-b-primary-10 rounded-md focus:outline-none focus:border-primary-30 focus:border-b-2 transition-colors"
            >
              <option value="face">{t("application_3_msg6")}</option>
              <option value="mix">{t("application_3_msg7")}</option>
              <option value="virtual">{t("application_3_msg8")}</option>
            </select>
            {errors.modality && (
              <span className="text-sm text-red-20 text-start">
                {errors.modality?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="institution">{t("application_3_msg9")}</label>
            <input
              type="text"
              className="text-gray-30 text-sm text-start transition-all"
              {...register("institution", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.institution && (
              <span className="text-sm text-red-20 text-start">
                {errors.institution?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="period">{t("application_3_msg10")}</label>
            <input
              type="text"
              className="text-gray-30 text-sm text-start transition-all"
              {...register("period", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.period && (
              <span className="text-sm text-red-20 text-start">
                {errors.period?.message}
              </span>
            )}
          </div>
          <div className="flex gap-4 justify-between">
            <label className="text-start w-1/2" htmlFor="program">
              {t("application_3_msg11")}
            </label>
            <div className="flex gap-2 items-center w-1/2">
              <label htmlFor="numPeriods">#</label>
              <input
                type="number"
                className="bg-primary-10 rounded-md px-2 py-1 w-1/3"
                {...register("numPeriods", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              />
              {errors.numPeriods && (
                <span className="text-sm text-red-20 text-start">
                  {errors.numPeriods?.message}
                </span>
              )}
              <label htmlFor="typePeriods">{t("application_3_msg12")}</label>
              <select
                name="typePeriods"
                id="typePeriods"
                className="bg-primary-10 rounded-md px-2 py-1 w-2/3"
              >
                <option value="">{t("application_3_msg13")}</option>
                <option value="">{t("application_3_msg14")}</option>
                <option value="">{t("application_3_msg15")}</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-start" htmlFor="academicPeriods">
              {t("application_3_msg16")}
            </label>
            <input
              type="text"
              className="text-gray-30 text-sm text-start transition-all"
              {...register("academicPeriods", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.academicPeriods && (
              <span className="text-sm text-red-20 text-start">
                {errors.academicPeriods?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-start" htmlFor="studyLeave">
              {t("application_3_msg17")}
            </label>
            <input
              type="text"
              className="text-gray-30 text-sm text-start transition-all"
              {...register("studyLeave", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.studyLeave && (
              <span className="text-sm text-red-20 text-start">
                {errors.studyLeave?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="period">{t("application_3_msg18")}</label>
            <select
              name="typePeriods"
              id="typePeriods"
              className="text-gray-30 text-sm text-start transition-all"
            >
              <option value="">{t("application_3_msg5")}</option>
              <option value="">{t("application_3_msg6")}</option>
              <option value="">{t("application_3_msg")}</option>
            </select>
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
