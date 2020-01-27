import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const itemMinWidth = 128

const Item = styled.li`
  min-width: ${itemMinWidth}px; /* For non-grid supporting browsers */
  @supports (grid-template-columns: 1fr) {
    min-width: auto;
  }

  margin-bottom: 1rem;
  text-align: center;
`

const FocusElement = styled.button`
  border: none;
  background: transparent;

  figcaption {
    visibility: hidden;
  }

  &:focus figcaption,
  &:hover figcaption {
    visibility: visible;
  }
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
      <FocusElement>
        <Card>
          <img src={image} alt={imageAlt} />
          <figcaption>{name}</figcaption>
        </Card>
      </FocusElement>
    </Item>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
}

export default TechItem
