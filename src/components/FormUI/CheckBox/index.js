import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox,
} from '@material-ui/core'
import { useField, useFormikContext } from 'formik'
import React from 'react'

const CheckBoxWrapper = ({ name, label, legend, ...props }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const onChangeHandler = (event) => {
    const { checked } = event.target
    setFieldValue(name, checked)
  }

  const confitCheckbox = {
    ...field,
    ...props,
    onChange: onChangeHandler,
  }

  const configFormControl = {}

  if (meta && meta.touched && meta.error) {
    configFormControl.error = true
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...confitCheckbox} />}
          label={label}
        ></FormControlLabel>
      </FormGroup>
    </FormControl>
  )
}

export default CheckBoxWrapper
