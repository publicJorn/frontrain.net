import React, { useState } from 'react'
import styled from 'styled-components'

import techStack from './techStack'
import Section from 'components/Section'
import SectionTitle from 'components/SectionTitle'
import { PROJECTS_HTML_ID, focusFirstProject } from '../Projects/Projects'
import TechItem, { itemMinWidth } from './TechItem'

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
        grid-template-columns: repeat(auto-fit, minmax(${itemMinWidth}px, 1fr));
      }
    }
  }

  list-style: none;
  padding: 0;
  max-width: ${itemMinWidth * 6}px;
  margin: 2rem auto -1rem; /* Negate last row items' padding */
`

const SkipLink = styled.a`
  transform: scale(0);
  box-sizing: border-box;
  position: absolute;
  margin: 0 0 0 0.5rem;

  &:focus {
    transform: scale(1);
  }
`

export default () => {
  const [showFigCaptions, setShowFigCaptions] = useState(false)

  const showNames = (evt) => {
    evt.preventDefault()
    setShowFigCaptions(!showFigCaptions)
  }

  return (
    <Section>
      <SectionTitle>Tech stack</SectionTitle>
      <p>
        Elk project is bijzonder en heeft zijn eigen benodigdheden. Hieronder
        een aantal methodes en technieken die ik regelmatig toepas.
      </p>

      <button onClick={showNames}>Toon alle tech titels</button>
      <SkipLink
        href={`#${PROJECTS_HTML_ID}`}
        onClick={focusFirstProject}
        tabIndex="0"
      >
        Sla over
      </SkipLink>

      <TechList className={showFigCaptions ? 'show-figcaption' : ''}>
        {techStack.map((tech) => (
          <TechItem key={tech.name} tech={tech} />
        ))}
      </TechList>
    </Section>
  )
}
