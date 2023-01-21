import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "../translations";


const defaultLang = localStorage.getItem("language");


i18n.use(initReactI18next).init({
  resources,
  lng: defaultLang,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
