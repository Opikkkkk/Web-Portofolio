import i18n from "i18next";
import { initReactI18next } from "react-i18next";

  const resources = {
    en: {
      translation: {
        welcome: "Hi, I'm {{name}}",
        desc: "I'm a passionate web developer.",
      },
    },
    id: {
      translation: {
        welcome: "Halo, saya {{name}}",
        desc: "Saya seorang pengembang web yang antusias.",
      },
    },
  };

i18n.use(initReactI18next).init({
  resources,
  lng: "id",
  interpolation: { escapeValue: false },
});

export default i18n;
