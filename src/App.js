import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import * as Yup from 'yup'
import { Container, Grid, Typography } from '@material-ui/core'
import Header from './components/Header'
import { Form, Formik } from 'formik'
import TextFieldWrapper from './components/FormUI/TextFieldWrapper/TextField'
import SelectWrapper from './components/FormUI/Select'
import { makeStyles } from '@material-ui/core/styles'
import countries from './data/countries.json'
import DateTimePicker from './components/FormUI/DateTimePicker'
import CheckBoxWrapper from './components/FormUI/CheckBox'
import ButtonWrapper from './components/FormUI/ButtonWrapper'

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function App() {
  const classes = useStyles()

  const INTITAL_FORM_FIELD_STATE = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    departureDate: '',
    arrivalDate: '',
    message: '',
    termOfService: false,
  }

  const FORM_FIELD_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    phone: Yup.number()
      .integer()
      .typeError('Please enter valid number')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    addressLine1: Yup.string().required('Required'),
    addressLine2: Yup.string(),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    departureDate: Yup.string().required('Required'),
    arrivalDate: Yup.string().required('Required'),
    message: Yup.string(),
    termOfService: Yup.boolean()
      .oneOf([true], 'Terms and Conditions must be accepted')
      .required('Terms and Conditions must be accepted'),
  })

  return (
    <Provider store={store}>
      <div className="App">
        <Grid justifyContent="center" container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="md">
              <div className={classes.formWrapper}>
                <Formik
                  initialValues={{ ...INTITAL_FORM_FIELD_STATE }}
                  validationSchema={FORM_FIELD_VALIDATION}
                  onSubmit={(values) => {
                    console.log(values)
                  }}
                >
                  <Form>
                    <Grid justifyContent="center" container spacing={2}>
                      <Grid item xs={12}>
                        <Typography style={{ marginTop: 10 }}>
                          Your details
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextFieldWrapper name="firstName" label="First Name" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextFieldWrapper name="lastName" label="Last Name" />
                      </Grid>
                      <Grid item xs={6}>
                        <TextFieldWrapper name="email" label="Email" />
                      </Grid>
                      <Grid item xs={6}>
                        <TextFieldWrapper name="phone" label="Phone" />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Your address</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <TextFieldWrapper name="city" label="City" />
                      </Grid>
                      <Grid item xs={6}>
                        <TextFieldWrapper name="state" label="State" />
                      </Grid>
                      <Grid item xs={6}>
                        <SelectWrapper
                          name="country"
                          label="Country"
                          options={countries}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextFieldWrapper
                          name="addressLine1"
                          label="Address Line 1"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextFieldWrapper
                          name="addressLine2"
                          label="Address Line 2"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Your Booking Info</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <DateTimePicker
                          name="arrivalDate"
                          label="Arrival Date"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <DateTimePicker
                          name="departureDate"
                          label="Departure Date"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextFieldWrapper
                          name="message"
                          label="Message"
                          multiline={true}
                          rows={4}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <CheckBoxWrapper
                          name="termOfService"
                          legend="Terms and Service"
                          label="I am agree"
                        />
                      </Grid>
                      <Grid item xs={6} md={4} lg={4} xl={4}>
                        <ButtonWrapper color="secondary">Submit</ButtonWrapper>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
    </Provider>
  )
}

export default App
