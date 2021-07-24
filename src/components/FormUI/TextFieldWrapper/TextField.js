import { TextField } from '@material-ui/core'
import { useField } from 'formik'

const TextFieldWrapper = ({ name, ...props }) => {
  const [field, meta] = useField(name)

  const configTextField = {
    ...field,
    ...props,
    fullWidth: true,
    variant: 'outlined',
  }

  if (meta && meta.error && meta.touched) {
    configTextField.error = true
    configTextField.helperText = meta.error
  }

  return <TextField {...configTextField} />
}

export default TextFieldWrapper
