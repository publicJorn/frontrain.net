import React from 'react'
import styled from 'styled-components'

import mq from 'theme/mediaQueries'
import Section from 'components/Section'

import imgJorn from 'images/me-200w.png'

const Image = styled.img`
  float: left;
  margin: 1rem 2rem 1rem 0;
  width: 200px;
  height: 231px;
  max-width: 10rem;

  ${mq.sm`
    & {
      display: block;
      float: none;
      margin: 0 auto 1rem;
    }
  `}
`

const T = styled.em`
  padding: 0;
  border: none;
  font-style: italic;
  white-space: nowrap;
  background: none;
`

export default () => (
  <Section>
    <Image src={imgJorn} alt="Jorn Luiten - frontend developer" />

    <p>
      Hi, ik ben Jorn.
      <br />
      Het is mijn passie om interactieve applicaties te realiseren, door het
      bouwen van gebruiksvriendelijke interfaces.
    </p>
    <p>
      Ik help organisaties hun product fantastisch te maken, door mijn ervaring
      op het gebied van <T>accessibility</T>, <T>performance</T> en{' '}
      <T>clean coding</T>.
    </p>
    <p>
      Ik ben inzetbaar als <T>frontend architect</T>,{' '}
      <T>javascript/typescript developer (vanilla/react)</T> en{' '}
      <T>consultant/trainer</T>.
    </p>
  </Section>
)
