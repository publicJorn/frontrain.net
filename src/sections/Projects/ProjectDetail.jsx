import React, { useLayoutEffect, useState, useRef } from 'react'
import { FocusOn } from 'react-focus-on'
import styled from 'styled-components'

import Button from 'components/Button'

const transitionDuration = 300

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: rgba(55, 55, 55, 0.7);
  opacity: 0;

  transition: opacity ${transitionDuration}ms ease-in-out;

  &.isOpen {
    opacity: 1;
  }
`

const Panel = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 50vw;
  height: 100vh;
  padding: 1rem;
  overflow: auto;
  background: white;
  box-shadow: inset rgb(55, 55, 55) 10px 0 10px -10px;
  transform: translate(100%, 0);

  transition: transform ${transitionDuration}ms ease-in-out;

  &.isOpen {
    transform: translate(0, 0);
  }
`

const Content = styled.div`
  max-width: calc(${(p) => p.theme.maxSectionWidth} / 2);
  text-align: justify;
`

const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`

const CloseButton = styled(Button)`
  padding: 0;
  border: none;
`

const ProjectDetail = ({ project, isVisible, handleClose }) => {
  const { title, html } = project

  const [isRendered, setRendered] = useState(false)
  const [isOpen, setOpen] = useState(false)

  useLayoutEffect(() => {
    let openTimer
    let closeTimer

    if (isVisible) {
      setRendered(true)
      if (!isOpen) {
        openTimer = setTimeout(() => {
          setOpen(true)
        }, 10)
      }
    } else {
      if (isOpen) setOpen(false)
      closeTimer = setTimeout(() => {
        setRendered(false)
      }, transitionDuration + 10)
    }

    return () => {
      clearTimeout(openTimer)
      clearTimeout(closeTimer)
    }
  }, [isVisible])

  return (
    isRendered && (
      <FocusOn onEscapeKey={handleClose} autoFocus={false}>
        <Backdrop className={isOpen ? 'isOpen' : ''} onClick={handleClose} />
        <Panel className={isOpen ? 'isOpen' : ''}>
          <Content data-autofocus>
            <Header>
              <CloseButton onClick={handleClose}>
                <img
                  src="images/close.svg"
                  width="25"
                  height="25"
                  alt="Close icon."
                  title="Close panel"
                />
              </CloseButton>
              <h3>{title}</h3>
            </Header>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Content>
        </Panel>
      </FocusOn>
    )
  )
}

export default ProjectDetail
