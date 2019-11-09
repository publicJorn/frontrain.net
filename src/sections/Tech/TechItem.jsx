import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.li`
  flex: 1 1 0;
  min-width: 128px;
  margin-bottom: 2rem;
`

const Card = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  margin: 0;

  img {
    width: 64px;
    height: 64px;
  }
`

const TechItem = props => {
  const { name, image, imageAlt } = props.tech

  return (
    <Item>
      <a href="tech/html.html">
        <Card>
          <img src={image} alt={imageAlt} />
          <figcaption>{name}</figcaption>
        </Card>
      </a>
    </Item>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
}

export default TechItem
