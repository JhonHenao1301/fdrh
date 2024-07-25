import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PoliciesTableEn from "../components/PoliceTable_en";
import PoliciesTableEs from "../components/PoliceTable_es";
import { Toaster, toast } from "sonner";
import { useTranslation } from "react-i18next";

const Application = () => {
  const [enableClearBtn, setEnableClearBtn] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const inputValue = event.target.value;

    if (inputValue.length > 0) {
      setEnableClearBtn(true);
      return;
    }
    setEnableClearBtn(false);
  };

  const handleReset = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const inputValue: NodeList = document.getElementsByName("resno");
    if (inputValue) {
      inputValue[0].value = "";
      setEnableClearBtn(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const regexCIAT: RegExp = /^\d{5}$/;
    const regexBIO: RegExp = /^BIO\d{5}$/;
    if (form) {
      const formData = new FormData(form);
      const resno = formData.get("resno") as string;
      if (resno) {
        if (regexCIAT.test(resno) || regexBIO.test(resno)) {
          navigate(`/application/${resno}`);
          form.reset();
          // Here introduce the rest of the function
        } else {
          toast.error(t("application_msg18"));
          form.reset();
        }
      } else {
        toast.error("Input must be filled");
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-4xl text-justify m-auto p-8">
      <h1 className="text-center col-span-4 text-3xl font-extrabold max-sm:text-xl dark:text-white-20">
        {t("application_msg1")}
      </h1>
      <section className="flex flex-col gap-4 mt-4">
        <p>{t("application_msg2")}</p>
        <p>{t("application_msg3")}</p>
        <p>{t("application_msg4")}</p>
        <strong className="text-sky-700 font-extrabold dark:text-white-20">
          {t("application_msg5")}
        </strong>
        <ul className="flex flex-col gap-4 mt-2">
          <li className="">{t("application_msg6")}</li>
          <li>{t("application_msg7")}</li>
          <li>{t("application_msg8")}</li>
          <li>{t("application_msg9")}</li>
        </ul>
        <p className="mt-1">
          <strong className="text-sky-700 font-extrabold dark:text-white-20">
            {t("application_msg10")}
          </strong>
        </p>
        <ul className="flex flex-col gap-4 mt-2">
          <li>{t("application_msg11")}</li>
          <li>{t("application_msg12")}</li>
          <li>{t("application_msg13")}</li>
          <li>{t("application_msg14")}</li>
        </ul>
      </section>
      {i18n.language === "en" ? <PoliciesTableEn /> : <PoliciesTableEs />}

      <form
        id="form"
        action="submit"
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center gap-4 mt-4"
      >
        <label
          htmlFor="resno"
          className="text-primary-30 font-extrabold dark:text-white-20"
        >
          {t("application_msg15")}
        </label>
        <input
          type="text"
          id="resno"
          name="resno"
          onChange={(e) => handleChange(e)}
          className="bg-white-10 border border-gray-50 rounded-xl max-w-48 p-2 text-sm dark:bg-primary-50 dark:border-white-20"
        />
        <div className="flex gap-2">
          <button type="submit" className="btn">
            {t("application_msg16")}
          </button>
          <button
            onClick={(e) => {
              handleReset(e);
            }}
            disabled={!enableClearBtn}
            className="btn disabled:hover:border-primary-10 disabled:opacity-[.50]"
          >
            {t("application_msg17")}
          </button>
        </div>
      </form>
      <Toaster richColors expand={false} />
    </div>
  );
};

export default Application;
