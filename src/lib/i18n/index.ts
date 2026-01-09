import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import cn from "./locales/cn.json";
import es from "./locales/es.json";
import uk from "./locales/uk.json";
import vi from "./locales/vi.json";

i18n.use(initReactI18next).init({
  resources: {
    uk: { translation: uk },
    vi: { translation: vi },
    es: { translation: es },
    cn: { translation: cn },
  },
  fallbackLng: "vi",
  interpolation: { escapeValue: false },
});

export default i18n;
