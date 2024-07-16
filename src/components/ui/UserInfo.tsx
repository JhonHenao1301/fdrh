import { useTranslation } from "react-i18next";

type Props = {
  id: string | undefined;
};

const UserInfo = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col gap-4 text-left">
        <h1 className="text-lg text-center font-bold dark:text-white-20">
          {t("application_profile_msg1")}
        </h1>
        <section className="flex flex-col sm:grid sm:grid-cols-2 gap-x-6 gap-y-4">
          <article className="article-info">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_profile_msg2")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
          <article className="article-info">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_profile_msg3")}
            </p>
            <p className="font-semibold dark:text-white-10">{props.id}</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_profile_msg4")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_profile_msg5")}
            </p>
            <p className="font-semibold dark:text-white-10">info</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_profile_msg6")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_profile_msg7")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_profile_msg8")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_profile_msg9")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
          <article className="article-info ">
            <p className="text-sm text-gray-30 dark:text-gray-10">
              {t("application_profile_msg10")}
            </p>
            <p className="font-semibold dark:text-white-10">Info</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default UserInfo;
