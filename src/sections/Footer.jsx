import React from 'react'
import styled from 'styled-components'

import Section from 'components/Section'
import Frontrain from 'components/Frontrain'

const Footer = styled(Section)`
  font-family: monospace;
`

const Link = styled.a`
  color: ${(p) => p.theme.colors.text};
`

export default () => (
  <Footer>
    <Frontrain />
    <br />
    <Link href="https://nl.linkedin.com/in/jornluiten">linkedIn</Link>
    <br />
    Chamber of Commerce (KvK) nr: 64846156
  </Footer>
)
