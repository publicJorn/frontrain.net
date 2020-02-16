import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import Col from 'components/Col'
import UsedTech from 'components/UsedTech'
import ProjectDetail from './ProjectDetail'

const ProjectCol = styled(Col)`
  text-align: left;
`

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  margin: 1rem 0;

  * {
    margin: 0;
  }
`

const MoreButton = styled.button`
  font-size: 0.8rem;
  word-break: break-word;
`

const ReadMorePortal = (props) =>
  createPortal(<ProjectDetail {...props} />, document.querySelector('#portal'))

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
