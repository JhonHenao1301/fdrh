import { useLocation, useParams } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import UserInfo from "../components/ui/UserInfo";
import DatePickerComponent from "../components/ui/DatePicker";
import SwitchComponent from "../components/ui/SwitchComponent";
import SelectComponent from "../components/ui/SelectComponent";

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
  additionalFinancial: boolean;
  percentageSupport: number;
  cashSupport: number;
};

const ApplicationForm = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const location = useLocation();
  const carrerChoice = location.state;
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onBlur" });

  const modalitySelect = [
    { value: "face", label: t("application_3_msg6") },
    { value: "mix", label: t("application_3_msg7") },
    { value: "virtual", label: t("application_3_msg8") },
  ];

  const typePeriodSelect = [
    { value: "semesters", label: t("application_3_msg13") },
    { value: "periods", label: t("application_3_msg14") },
    { value: "modules", label: t("application_3_msg15") },
  ];

  const statusSelect = [
    { value: "started", label: t("application_3_msg19") },
    { value: "admitted", label: t("application_3_msg20") },
    { value: "notApplied", label: t("application_3_msg21") },
  ];

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-6 p-8 max-w-4xl h-full m-auto">
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
              placeholder="Software engineer"
              {...register("program", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                maxLength: {
                  value: 30,
                  message: "This field cannot exceed a limit of 30 characters.",
                },
              })}
              className={`input-standard ${
                errors.program ? "border-red-10" : null
              } `}
              autoComplete="off"
            />
            {errors.program && (
              <span className="text-start text-xs text-red-20">
                {errors.program.message}
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
              defaultValue={carrerChoice}
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
              placeholder="This program will improve my ability to make better decisions"
              className={`input-standard ${
                errors.description ? "border-red-10" : null
              } `}
              autoComplete="off"
              {...register("description", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                maxLength: {
                  value: 100,
                  message:
                    "This field cannot exceed a limit of 100 characters.",
                },
              })}
            />
            {errors.description && (
              <span className="text-xs text-red-20 text-start">
                {errors.description.message}
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
            <SelectComponent
              name="modality"
              valueArray={modalitySelect}
              control={control}
            />
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
              placeholder="MIT"
              className={`input-standard ${
                errors.institution ? "border-red-10" : null
              } `}
              autoComplete="off"
              {...register("institution", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                maxLength: {
                  value: 30,
                  message: "This field cannot exceed a limit of 30 characters.",
                },
              })}
            />
            {errors.institution && (
              <span className="text-sm text-red-20 text-start">
                {errors.institution.message}
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
              placeholder="Semester 1 of 2024 to Semester 2 of 2026"
              className={`input-standard ${
                errors.period ? "border-red-10" : null
              } `}
              autoComplete="off"
              {...register("period", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                maxLength: {
                  value: 30,
                  message: "This field cannot exceed a limit of 30 characters.",
                },
              })}
            />
            {errors.period && (
              <span className="text-sm text-red-20 text-start">
                {errors.period.message}
              </span>
            )}
          </div>
          {/* Duration program (durationTime - typePeriod) */}
          <div className="flex flex-col gap-4 justify-between md:flex-row">
            <label className="text-gray-30 text-sm text-start transition-all">
              {t("application_3_msg11")}
            </label>
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="durationTime"
                    className="text-gray-30 text-sm text-start transition-all"
                  >
                    #
                  </label>
                  <input
                    type="number"
                    placeholder="4"
                    className={`input-standard ${
                      errors.durationTime ? "border-red-10" : null
                    } `}
                    autoComplete="off"
                    {...register("durationTime", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                      min: {
                        value: 1,
                        message: "Fill a higher value",
                      },
                      maxLength: {
                        value: 2,
                        message: "Maximum 2 characters",
                      },
                    })}
                  />
                </div>
                {errors.durationTime && (
                  <span className="text-sm text-red-20 text-start">
                    {errors.durationTime?.message}
                  </span>
                )}
              </div>
              <label
                htmlFor="typePeriod"
                className="text-gray-30 text-sm text-start transition-all"
              >
                {t("application_3_msg12")}
              </label>
              <SelectComponent
                name="typePeriod"
                control={control}
                valueArray={typePeriodSelect}
              />
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
              placeholder="6 periods"
              className={`input-standard ${
                errors.academicPeriods ? "border-red-10" : null
              } `}
              autoComplete="off"
              {...register("academicPeriods", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                maxLength: {
                  value: 30,
                  message: "This field cannot exceed a limit of 30 characters.",
                },
              })}
            />
            {errors.academicPeriods && (
              <span className="text-sm text-red-20 text-start">
                {errors.academicPeriods.message}
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
              placeholder="2 years"
              className={`input-standard ${
                errors.studyLeave ? "border-red-10" : null
              } `}
              autoComplete="off"
              {...register("studyLeave", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                maxLength: {
                  value: 30,
                  message: "This field cannot exceed a limit of 30 characters.",
                },
              })}
            />
            {errors.studyLeave && (
              <span className="text-sm text-red-20 text-start">
                {errors.studyLeave.message}
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
            <SelectComponent
              name="status"
              control={control}
              valueArray={statusSelect}
            />
          </div>
          {/* Start date (startDate) */}
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-30 text-sm text-start transition-all"
              htmlFor="startDate"
            >
              {t("application_3_msg22")}
            </label>
            <DatePickerComponent
              name="startDate"
              placeholder="YYYY-MM-DD"
              control={control}
            />
          </div>
          {/* Degree date (degreeDate) */}
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-30 text-sm text-start transition-all"
              htmlFor="degreeDate"
            >
              {t("application_3_msg23")}
            </label>
            <DatePickerComponent
              name="degreeDate"
              placeholder="YYYY-MM-DD"
              control={control}
              compareDate={watch("startDate")}
            />
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
              className={`input-standard ${
                errors.totalCost ? "border-red-10" : null
              }`}
              autoComplete="off"
              {...register("totalCost", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                min: {
                  value: 1,
                  message: "Fill a higher value",
                },
                maxLength: {
                  value: 12,
                  message: "Maximum 12 characters in this field",
                },
              })}
            />
            {errors.totalCost && (
              <span className="text-sm text-red-20 text-start">
                {errors.totalCost.message}
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
            <SwitchComponent name="additionalFinancial" control={control} />
          </div>
          {/* Support amount (support) */}
          <div
            className={`flex flex-col gap-2 ${
              !watch("additionalFinancial") ? "hidden" : null
            }`}
          >
            <label className="text-gray-30 text-sm text-start">
              {t("application_3_msg26")}
            </label>
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-2">
                <section className="flex items-center gap-2">
                  <label
                    className="text-gray-30 text-xs text-start"
                    htmlFor="percentageSupport"
                  >
                    %
                  </label>
                  <input
                    type="number"
                    defaultValue={0}
                    autoComplete="off"
                    className="input-standard"
                    {...register("percentageSupport", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                      min: {
                        value: 0,
                        message: "Fill a higher value",
                      },
                      maxLength: {
                        value: 3,
                        message: "Maximum 3 characters in this field",
                      },
                    })}
                  />
                </section>
                {errors.percentageSupport && (
                  <span className="text-sm text-red-20 text-start">
                    {errors.percentageSupport.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <section className="flex items-center gap-2">
                  <label
                    className="text-gray-30 text-xs text-start"
                    htmlFor="cashSupport"
                  >
                    US$
                  </label>
                  <input
                    type="number"
                    defaultValue={0}
                    autoComplete="off"
                    className="input-standard"
                    {...register("cashSupport", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                      min: {
                        value: 0,
                        message: "Fill a higher value",
                      },
                      maxLength: {
                        value: 3,
                        message: "Maximum 3 characters in this field",
                      },
                    })}
                  />
                </section>
                {errors.cashSupport && (
                  <span className="text-sm text-red-20 text-start">
                    {errors.cashSupport.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn self-center mt-4"
            disabled={!isValid}
          >
            {t("application_2_msg6")}
          </button>
        </div>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    </div>
  );
};

export default ApplicationForm;
