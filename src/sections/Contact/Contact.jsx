import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'

import { Input, Error, Flex, Counter, Success, Failure } from './contact.styles'
import Message from './Message'
import Drawer from 'components/Drawer'
import Button from 'components/Button'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const maxChars = 250

class Contact extends Component {
  state = {
    charsLeft: maxChars,
    formSent: false,
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

  handleSubmit = (values) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => this.setState({ formSent: true, formSendError: '' }))
      .catch((formSendError) =>
        this.setState({ formSent: false, formSendError }),
      )
  }

  render() {
    const { charsLeft, formSent, formSendError } = this.state
    return (
      <Drawer {...this.props}>
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
              <Button type="submit">Verstuur</Button>
              <Counter>{charsLeft}</Counter>
            </Flex>

            {formSent && (
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
