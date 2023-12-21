import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
import { en } from "../utils/locales/en";
import { ru } from "../utils/locales/ru";
import { uzKrill } from "../utils/locales/uzKrill";
import { uzLotin } from "../utils/locales/uzLotin";


const resources = {
  en: {
    translation: en
  },
  ru: {
    translation:ru 
  },
  krill: {
    translation:uzKrill 
  },
  uz: {
    translation:uzLotin 
  },
}


function i18next () {
  const { lang } = useSelector(state => state.locale)

  i18n.
  use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng:lang, 
    fallbackLng: lang, 
    interpolation: {
      escapeValue: false, 
    },
  })

}


export default i18next