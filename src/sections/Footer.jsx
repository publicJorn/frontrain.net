import React from 'react'
import styled from 'styled-components'

import Section from 'components/Section'
import Frontrain from 'components/Frontrain'

const Footer = styled(Section)`
  font-family: monospace;
`

export default () => (
  <Footer>
    <Frontrain />
    <br />
    <a href="https://nl.linkedin.com/in/jornluiten">linkedIn</a>
    <br />
    Chamber of Commerce (KvK) nr: 64846156
  </Footer>
)
