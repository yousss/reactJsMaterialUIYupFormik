import React, { useEffect } from 'react'
import i18n from 'i18next'

const useTranslateFormErrors = (errors, touched, setFieldTouched) => {
  useEffect(() => {
    i18n.on('languageChanged', (lng) => {
      Object.keys(errors).forEach((fieldName) => {
        if (Object.keys(touched).includes(fieldName)) {
          setFieldTouched(fieldName)
        }
      })
    })
    return () => {
      i18n.off('languageChanged', (lng) => {})
    }
  }, [errors, i18n, setFieldTouched, touched])
}

const WithTranslateFormErrors = ({
  errors,
  touched,
  setFieldTouched,
  children,
}) => {
  useTranslateFormErrors(errors, touched, setFieldTouched)
  return <>{children}</>
}

WithTranslateFormErrors.propTypes = {
  form: PropTypes.object,
}

export { useTranslateFormErrors }
