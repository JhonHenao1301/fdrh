import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import UserInfo from "../components/ui/UserInfo";

type Inputs = {
  program: string;
  level: string;
  description: string;
  modality: string;
  institution: string;
  period: string;
  durationTime: number;
  typePeriod: string;
  academicPeriods: string;
  studyLeave: string;
  status: string;
  startDate: Date;
  degreeDate: Date;
  totalCost: number;
  additionalFinancial: string;
  support: number;
};

const ApplicationForm = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  // const navigate = useNavigate();

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
          {/* Academic program (program) */}
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
              className="input-standard"
              autoComplete="off"
            />
            {errors.program && (
              <span className="text-start text-xs text-red-20">
                {errors.program?.message}
              </span>
            )}
          </div>
          {/* Education level (level) */}
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
          {/* Justification (description) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-gray-30 text-sm text-start transition-all"
            >
              {t("application_3_msg4")}
            </label>
            <input
              type="text"
              className="input-standard"
              autoComplete="off"
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
          {/* Modality (modality) */}
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
              className="input-standard"
              autoComplete="off"
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
          {/* University (institution) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="institution"
              className="text-gray-30 text-sm text-start transition-all"
            >
              {t("application_3_msg9")}
            </label>
            <input
              type="text"
              className="input-standard"
              autoComplete="off"
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
          {/* Period (period) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="period"
              className="text-gray-30 text-sm text-start transition-all"
            >
              {t("application_3_msg10")}
            </label>
            <input
              type="text"
              className="input-standard"
              autoComplete="off"
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
          {/* Duration program (durationTime - typePeriod) */}
          <div className="flex gap-4 justify-between">
            <label className="text-gray-30 text-sm text-start transition-all">
              {t("application_3_msg11")}
            </label>
            <div className="flex gap-2 items-center w-1/2">
              <label
                htmlFor="durationTime"
                className="text-gray-30 text-sm text-start transition-all"
              >
                #
              </label>
              <input
                type="number"
                className="input-standard"
                autoComplete="off"
                {...register("durationTime", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              />
              {errors.durationTime && (
                <span className="text-sm text-red-20 text-start">
                  {errors.durationTime?.message}
                </span>
              )}
              <label
                htmlFor="typePeriod"
                className="text-gray-30 text-sm text-start transition-all"
              >
                {t("application_3_msg12")}
              </label>
              <select
                className="input-standard"
                autoComplete="off"
                {...register("typePeriod")}
              >
                <option value="">{t("application_3_msg13")}</option>
                <option value="">{t("application_3_msg14")}</option>
                <option value="">{t("application_3_msg15")}</option>
              </select>
            </div>
          </div>
          {/* Academic periods (academicPeriods)  */}
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-30 text-sm text-start transition-all"
              htmlFor="academicPeriods"
            >
              {t("application_3_msg16")}
            </label>
            <input
              type="text"
              className="input-standard"
              autoComplete="off"
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
          {/* Study leave (studyLeave) */}
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-30 text-sm text-start transition-all"
              htmlFor="studyLeave"
            >
              {t("application_3_msg17")}
            </label>
            <input
              type="text"
              className="input-standard"
              autoComplete="off"
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
          {/* Current status (status) */}
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-30 text-sm text-start transition-all"
              htmlFor="status"
            >
              {t("application_3_msg18")}
            </label>
            <select
              className="input-standard"
              autoComplete="off"
              {...register("status")}
            >
              <option value="">{t("application_3_msg19")}</option>
              <option value="">{t("application_3_msg20")}</option>
              <option value="">{t("application_3_msg21")}</option>
            </select>
          </div>
          {/* Start date (startDate) */}
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-30 text-sm text-start transition-all"
              htmlFor="startDate"
            >
              {t("application_3_msg22")}
            </label>
            <input
              type="date"
              className="input-standard"
              autoComplete="off"
              {...register("startDate", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.startDate && (
              <span className="text-sm text-red-20 text-start">
                {errors.startDate?.message}
              </span>
            )}
          </div>
          {/* Degree date (degreeDate) */}
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-30 text-sm text-start transition-all"
              htmlFor="degreeDate"
            >
              {t("application_3_msg23")}
            </label>
            <input
              type="date"
              className="input-standard"
              autoComplete="off"
              {...register("degreeDate", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.degreeDate && (
              <span className="text-sm text-red-20 text-start">
                {errors.degreeDate?.message}
              </span>
            )}
          </div>
          {/* Total cost (totalCost) */}
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-30 text-sm text-start transition-all"
              htmlFor="totalCost"
            >
              {t("application_3_msg24")}
            </label>
            <input
              type="number"
              className="input-standard"
              autoComplete="off"
              {...register("totalCost", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.totalCost && (
              <span className="text-sm text-red-20 text-start">
                {errors.totalCost?.message}
              </span>
            )}
          </div>
          {/* Receive additional financial (additionalFinancial) */}
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-30 text-sm text-start transition-all"
              htmlFor="additionalFinancial"
            >
              {t("application_3_msg25")}
            </label>
            <div className="flex gap-6">
              <div className="flex gap-2">
                <label htmlFor="additionalFinancial">
                  {t("application_3_msg26")}
                </label>
                <input
                  type="radio"
                  className="input-standard"
                  autoComplete="off"
                  {...register("additionalFinancial")}
                />
              </div>
              <div className="flex gap-2">
                <label htmlFor="additionalFinancial">No</label>
                <input
                  type="radio"
                  className="input-standard"
                  autoComplete="off"
                  {...register("additionalFinancial")}
                />
              </div>
            </div>
          </div>

          {/* Support amount (support) */}
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-30 text-sm text-start"
              htmlFor="support"
            >
              {t("application_3_msg28")}
            </label>
            <div className="flex items-center gap-2">
              <label className="text-gray-30 text-xs text-start">%</label>
              <input
                type="number"
                className="input-standard"
                autoComplete="off"
                {...register("support", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              />
              <label className="text-gray-30 text-xs text-start">US$</label>
              <input
                type="number"
                className="input-standard"
                autoComplete="off"
                {...register("support", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              />
            </div>
            {errors.support && (
              <span className="text-sm text-red-20 text-start">
                {errors.support?.message}
              </span>
            )}
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
