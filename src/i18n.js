import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "HOME",
    },
  },
  ru: {
    translation: {
      home: "Домой",
    },
  },
  arm: {
    translation: {
      home: "Տուն",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
