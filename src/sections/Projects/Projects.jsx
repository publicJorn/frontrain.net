import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Row from 'components/Row'
import Section from 'components/Section'
import Project from './Project'

export default () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(query)

  return (
    <Section>
      <h2>Projecten</h2>
      <p>Hier een selectie van projecten waar ik aan heb gewerkt.</p>

      <Row>
        {edges.map(({ node }, i) => (
          <Project key={i} {...node.frontmatter} html={node.html} />
        ))}
      </Row>
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
