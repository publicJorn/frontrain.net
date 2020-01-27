import React from 'react'
import styled from 'styled-components'

import mq from 'theme/mediaQueries'
import Section from 'components/Section'
import Row from 'components/Row'
import Col from 'components/Col'

import imgJorn from 'images/jorn-luiten-frontend-developer.jpg'

const ColIntroImage = styled(Col)`
  align-self: center;
  text-align: center;
`

const Image = styled.img`
  float: left;
  margin: 0 1rem 0 0;
  max-width: 10rem;

  ${mq.sm`
    & {
      display: block;
      float: none;
      margin: 0 auto 1rem;
    }
  `}
`

export default () => (
  <Section>
    <Image src={imgJorn} alt="Jorn Luiten - frontend developer" />

    <p>
      Hi, I'm Jorn. I build rich web experiences.
      <br />
      Using modern tech and an efficient workflow I can help make your product awesome.
    </p>
  </Section>
)
