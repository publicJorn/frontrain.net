import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import mq from 'theme/mediaQueries'
import Col from 'components/Col'
import UsedTech from 'components/UsedTech'
import ProjectDetail from './ProjectDetail'

const ProjectCol = styled(Col)`
  text-align: left;
  ${mq.xl`
    padding: 0 2rem;
  `}
`

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  margin: 1rem 0;
  box-shadow: ${(p) => p.theme.colors.brandLight} inset 0px -6px 0px 0px;

  * {
    margin: 0;
  }
`

const MoreButton = styled.button`
  border: none;
  font-size: 0.8rem;
  line-height: 2;
  text-decoration: underline;
  word-break: break-word;
  padding: 0;
  color: ${(p) => p.theme.colors.brand};
  background-color: transparent;
`

const ReadMorePortal = (props) => {
  return typeof document !== 'undefined'
    ? createPortal(
        <ProjectDetail {...props} />,
        document.querySelector('#portal'),
      )
    : null
}

const Project = (project) => {
  const { title, short, tech } = project
  const [showDetails, setShowDetails] = useState(false)

  return (
    <ProjectCol width={[1, 1, 1 / 2]}>
      <Title>
        <h3>{title}</h3>
        <MoreButton type="button" onClick={() => setShowDetails(!showDetails)}>
          Lees meer
        </MoreButton>
        <ReadMorePortal
          project={project}
          isVisible={showDetails}
          handleClose={() => setShowDetails(false)}
        />
      </Title>
      <p dangerouslySetInnerHTML={{ __html: short }} />
      <UsedTech>{tech}</UsedTech>
    </ProjectCol>
  )
}

export default Project
