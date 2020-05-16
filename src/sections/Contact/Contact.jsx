import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'

import { Input, Error, Flex, Counter, Success, Failure } from './contact.styles'
import Message from './Message'
import Drawer from 'components/Drawer/Drawer'
import Button from 'components/Button'
import { thisExpression } from '@babel/types'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const maxChars = 250

class Contact extends Component {
  state = {
    charsLeft: maxChars,
    isSubmitting: false,
    isFormSent: false,
    formSendError: '',
  }

  updateCharsLeft = (text) => {
    if (text.length <= maxChars) {
      this.setState({ charsLeft: maxChars - text.length })
    }
  }

  handleValidation = (values) => {
    const errors = {}

    if (!values.name) errors.name = 'Verplicht veld'
    if (!values.email) errors.email = 'Verplicht veld'
    if (!values.message) errors.message = 'Verplicht veld'

    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    )
      errors.email = 'Ongeldig e-mailadres'

    return errors
  }

  handleSubmit = (values, actions) => {
    this.setState({ isSubmitting: true })

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => this.handleSuccessfulSubmit(actions))
      .catch((formSendError) =>
        this.setState({ isFormSent: false, formSendError, submitting: false }),
      )
  }

  handleSuccessfulSubmit = ({ resetForm }) => {
    this.setState({
      isFormSent: true,
      formSendError: '',
      isSubmitting: false,
    })
    resetForm()
  }

  handleDrawerClosing = () => {
    this.setState({ isSubmitting: false, isFormSent: false, formSendError: '' })
    this.props.handleClose()
  }

  render() {
    const { charsLeft, isFormSent, formSendError, isSubmitting } = this.state
    return (
      <Drawer {...this.props} handleClose={this.handleDrawerClosing}>
        <Drawer.Header>
          <h3>Contact</h3>
        </Drawer.Header>

        <p>Laten we samen wat moois maken!</p>

        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={this.handleValidation}
          onSubmit={this.handleSubmit}
        >
          <Form>
            <input type="hidden" name="form-name" value="contact" />

            <Input name="name" placeholder="Je naam" />
            <Error name="name" component="span" />

            <Input name="email" placeholder="Je e-mailadres" />
            <Error name="email" component="span" />

            <Field
              component={Message}
              name="message"
              placeholder="Zeg het maar!"
              parentChangeHandler={this.updateCharsLeft}
              maxChars={maxChars}
            />
            <Error name="message" component="span" />

            <Flex>
              <Button type="submit" disabled={isSubmitting}>
                Verstuur
              </Button>
              <Counter>{charsLeft}</Counter>
            </Flex>

            {isFormSent && (
              <Success>
                Formulier verstuurd, ik neem spoedig contact met je op.
              </Success>
            )}

            {formSendError && <Failure>{formSendError}</Failure>}
          </Form>
        </Formik>
      </Drawer>
    )
  }
}

Contact.propTypes = {}
Contact.defaultProps = {}

export default Contact
