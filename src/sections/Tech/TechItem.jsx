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
  position: relative;
  padding-bottom: 2rem;
  border: none;
  background: transparent;

  figcaption {
    position: absolute;
    bottom: 0;
    z-index: 1;
    padding: 0 0.5rem;
    white-space: nowrap;
    outline: 1px solid ${(p) => p.theme.colors.focus};
    background-color: white;
    transform: scale(0) translate(0, -1rem);
    transition: transform 150ms ease-in-out;
  }

  &:focus,
  &:hover,
  .show-figcaption & {
    outline: none;
    figcaption {
      visibility: visible;
      transform: scale(1) translate(0, 0);
    }
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

const TechItem = (props) => {
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
