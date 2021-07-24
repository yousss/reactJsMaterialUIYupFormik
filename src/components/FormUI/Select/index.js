import { TextField, MenuItem } from '@material-ui/core'
import { useField, useFormikContext } from 'formik'

const SelectWrapper = ({ name, options, ...props }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const onChangeHandler = (event) => {
    const { value } = event.target
    setFieldValue(name, value)
  }

  const configTextField = {
    ...field,
    ...props,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: onChangeHandler,
  }
  if (meta && meta.error && meta.touched) {
    configTextField.error = true
    configTextField.helperText = meta.error
  }

  return (
    <TextField {...configTextField}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        )
      })}
    </TextField>
  )
}

export default SelectWrapper
