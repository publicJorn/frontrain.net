import React from 'react'
import styled from 'styled-components'

import Drawer from 'components/Drawer/Drawer'
import UsedTech from 'components/UsedTech'

const Logo = styled.img`
  max-width: 4rem;
  max-height: 2rem;
  margin-left: 1rem;
  vertical-align: middle;
  border: none;
`

const Title = styled.h3`
  white-space: nowrap;
`

const HtmlContent = styled.div`
  img {
    width: 100%;
    padding: 0.5rem;
    box-shadow: 0 0 4px 2px #ccc;
  }

  a {
    font-family: 'Titillium Web', sans-serif;
  }
`

const ProjectDetail = ({ project, ...drawerProps }) => {
  const { title, logo, html, tech } = project

  return (
    <Drawer {...drawerProps}>
      <Drawer.Header>
        <Title>
          {title}
          <Logo src={logo} alt={title} />
        </Title>
      </Drawer.Header>

      <HtmlContent dangerouslySetInnerHTML={{ __html: html }} />
      <h4>Gebruikte technieken</h4>
      <UsedTech>{tech}</UsedTech>
    </Drawer>
  )
}

export default ProjectDetail
