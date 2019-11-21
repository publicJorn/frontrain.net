import React from 'react'
import styled from 'styled-components'

import techStack from './techStack'
import Section from 'components/Section'
import TechItem from './TechItem'

const TechList = styled.ul`
  /* For older browsers */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  /* For newer browsers */
  @supports (grid-template-columns: 1fr) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(33.33%, 1fr));

    /* Using custom width, else there's a short span where there's 2 hor icons instead of 3 */
    @media (min-width: 460px) {
      & {
        grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
      }
    }
  }

  list-style: none;
  padding: 0;
  margin-top: 2rem;
`

export default () => (
  <Section>
    <p>
      Each project is special and has it's own requirements. Here's some of the techniques and
      methodologies I use regularly:
    </p>

    <TechList>
      {techStack.map(tech => (
        <TechItem key={tech.name} tech={tech} />
      ))}
    </TechList>
  </Section>
)
