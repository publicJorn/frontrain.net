import React from 'react'
import styled from 'styled-components'

import Section from 'components/Section'
import SectionTitle from 'components/SectionTitle'
import Frontrain from 'components/Frontrain'

const Footer = styled(Section)`
  font-family: monospace;
`

const Link = styled.a`
  color: ${(p) => p.theme.colors.text};
`

export default () => (
  <Footer>
    <SectionTitle>
      <Frontrain />
    </SectionTitle>
    <br />
    <Link href="https://nl.linkedin.com/in/jornluiten">linkedIn</Link>
    <br />
    KvK: 64846156
  </Footer>
)
