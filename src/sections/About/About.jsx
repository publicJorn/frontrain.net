import React from 'react'
import styled from 'styled-components'

import mq from 'theme/mediaQueries'
import Section from 'components/Section'

import imgJorn from 'images/me.png'

const Image = styled.img`
  float: left;
  margin: 0 2rem 0 0;
  max-width: 10rem;

  ${mq.sm`
    & {
      display: block;
      float: none;
      margin: 0 auto 1rem;
    }
  `}
`

// TODO: Make button with tooltip
const T = styled.em`
  padding: 0;
  border: none;
  /* border-bottom: 1px dotted ${(p) => p.theme.colors.brandLightBorder}; */
  font-style: italic;
  white-space: nowrap;
  background: none;

  /* &:focus {
    outline: none;
    border-bottom: 1px solid ${(p) => p.theme.colors.focus};
  } */
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
      <T>javascript developer (es6+/react)</T>, <T>app developer (flutter)</T>{' '}
      en <T>consultant/trainer</T>.
    </p>
  </Section>
)
