import React from 'react'
import styled from 'styled-components'

import Section from 'components/Section'
import TechItem from './TechItem'

const techStack = [
  {
    name: 'HTML',
    image: 'images/html.svg',
    imageAlt: 'icon',
  },
  {
    name: 'CSS',
    image: 'images/css.svg',
    imageAlt: 'CSS icon',
  },
  {
    name: 'Javascript',
    image: 'images/js.svg',
    imageAlt: 'JS icon',
  },
  {
    name: 'Typescript',
    image: 'images/ts.svg',
    imageAlt: 'TS icon',
  },
  {
    name: 'React',
    image: 'images/react.svg',
    imageAlt: 'React icon',
  },
  {
    name: 'NodeJS',
    image: 'images/nodejs.svg',
    imageAlt: 'NodeJS icon',
  },
  // {
  //   name: 'HTML',
  //   image: 'images/',
  //   imageAlt: 'icon',
  // },
]

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  list-style: none;
`

export default () => (
  <Section>
    <p>
      Each project is special and has it's own requirements. Here's a selection of techniques I'm
      using regularly:
    </p>

    <TechList>
      {techStack.map(tech => (
        <TechItem key={tech.name} tech={tech} />
      ))}
    </TechList>

    <aside>
      <a href="https://worldvectorlogo.com/">worldvectorlogo.com</a>
    </aside>
  </Section>
)
