import React from 'react'
import { Button } from '@material-ui/core'
import { useFormikContext } from 'formik'

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext()
  const handleSubmit = () => {
    submitForm()
  }

  const configButton = {
    fullWidth: true,
    variant: 'contained',
    color: 'primary',
    onClick: handleSubmit,
    ...otherProps,
  }

  return <Button {...configButton}>{children}</Button>
}
export default ButtonWrapper
