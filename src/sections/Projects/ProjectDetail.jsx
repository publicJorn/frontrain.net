import React, { useLayoutEffect, useState } from 'react'
import { FocusOn } from 'react-focus-on'
import styled from 'styled-components'

import mq from 'theme/mediaQueries'
import Button from 'components/Button'
import UsedTech from 'components/UsedTech'

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
  width: 90vw;
  min-width: 300px;
  height: 100vh;
  padding: 1rem;
  overflow: auto;
  background: white;
  box-shadow: rgb(55, 55, 55) -6px 0px 20px 0px;
  transform: translate(100%, 0);

  transition: transform ${transitionDuration}ms ease-in-out,
    width 150ms ease-out;

  &.isOpen {
    transform: translate(0, 0);
  }

  ${mq.lg`
    width: 75vw;
    padding-left: 2rem;
  `}

  ${mq.xl`
    width: 50vw;
    padding-left: 2rem;
  `}
`

const Title = styled.h3`
  white-space: nowrap;
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

const Logo = styled.img`
  max-width: 4rem;
  max-height: 2rem;
  margin-left: 1rem;
  vertical-align: middle;
  border: none;
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

const ProjectDetail = ({ project, isVisible, handleClose }) => {
  const { title, logo, html, tech } = project

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
              <Title>
                {title}
                <Logo src={logo} alt={title} />
              </Title>
            </Header>

            <HtmlContent dangerouslySetInnerHTML={{ __html: html }} />
            <h4>Gebruikte technieken</h4>
            <UsedTech>{tech}</UsedTech>
          </Content>
        </Panel>
      </FocusOn>
    )
  )
}

export default ProjectDetail
