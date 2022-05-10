import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import mq from 'theme/mediaQueries'
import Row from 'components/Row'
import Section from 'components/Section'
import SectionTitle from 'components/SectionTitle'
import Project from './Project'

const ProjectsRow = styled(Row)`
  ${mq.xl`
    margin: 0 -2rem;
  `}
`

export const PROJECTS_HTML_ID = 'projects'

export const focusFirstProject = () => {
  document
    .querySelector(`#${PROJECTS_HTML_ID}`)
    .parentElement.querySelector('button')
    .focus()
}

export default () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(query)

  return (
    <Section>
      <SectionTitle id={PROJECTS_HTML_ID}>Projecten</SectionTitle>
      <p>Hier een selectie van projecten waar ik aan heb gewerkt.</p>

      <ProjectsRow>
        {edges.map(({ node }, i) => (
          <Project key={i} {...node.frontmatter} html={node.html} />
        ))}
      </ProjectsRow>
    </Section>
  )
}

const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___order, order: DESC }
      filter: { fileAbsolutePath: { regex: "//projects/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            logo
            link
            short
            tech
          }
          html
        }
      }
    }
  }
`
