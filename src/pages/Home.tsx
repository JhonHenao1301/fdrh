import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen py-8">
      <h1 className="text-2xl font-semibold">{t("home_msg1")}</h1>
      <div className="flex flex-col gap-2 max-w-48">
        <button className="border rounded-md bg-slate-50 text-slate-700 p-2 text-sm">
          <Link to="/admin">{t("home_msg2")}</Link>
        </button>
        <button className="border rounded-md bg-slate-50 text-slate-700 p-2 text-sm">
          <Link to="/application">{t("home_msg3")}</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
