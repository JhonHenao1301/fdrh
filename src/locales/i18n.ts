import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home_msg1: "Main page",
      home_msg2: "Admin page",
      home_msg3: "Application page",
    },
  },
  es: {
    translation: {
      home_msg1: "Página principal",
      home_msg2: "Página de administración",
      home_msg3: "Página de aplicación",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
