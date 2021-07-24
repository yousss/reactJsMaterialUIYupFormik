import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      headerText: 'Welcome to React, react-i18next, Yup and Formik',
      emailRequired: 'Email is a required field',
      emailPlaceHolder: 'Enter your email',
      reset: 'reset',
      submit: 'submit',
      validNum: 'Please enter valid number',
      required: 'Required',
    },
  },
  fr: {
    translation: {
      headerText: 'Bienvenue a React and react-i18next, Yup et Formik',
      emailRequired: 'Email est un champ requis',
      emailPlaceHolder: 'Fournissez votre email',
      reset: 'réinitialiser',
      submit: 'soumettre',
      validNum: 'Please enter valid number French',
      required: 'Requi',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
