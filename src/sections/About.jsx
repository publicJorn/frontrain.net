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
  display: block;
  margin: 1rem 0;

  ${mq.sm`
    & {
      max-width: 10rem;
    }
  `}
`

export default () => (
  <Section>
    <Row>
      <ColIntroImage className="col-sm-4 col-up-2">
        <Image src={imgJorn} alt="Jorn Luiten - frontend developer" />
      </ColIntroImage>

      <Col className="col-sm-8 col-up-10">
        <p>
          Hi, I'm Jorn. I build rich web experiences.
          <br />
          Using modern tech and an efficient workflow I can help make your product awesome.
        </p>
      </Col>
    </Row>
  </Section>
)
