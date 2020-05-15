import React from 'react'
import PropTypes from 'prop-types'

import { Textarea } from './contact.styles'

const Message = ({ parentChangeHandler, maxChars, field, ...props }) => {
  const handleChange = (evt) => {
    if (evt.target.value.length > maxChars) return
    parentChangeHandler(evt.target.value)
    field.onChange(evt)
  }

  return <Textarea {...field} {...props} onChange={handleChange} />
}

Message.propTypes = {
  parentChangeHandler: PropTypes.func.isRequired,
  maxChars: PropTypes.number.isRequired,
  field: PropTypes.object.isRequired, // Formik
}

export default Message
