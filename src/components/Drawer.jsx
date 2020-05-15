import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  useMemo,
} from 'react'
import PropTypes from 'prop-types'
import { FocusOn } from 'react-focus-on'
import styled from 'styled-components'

import mq from 'theme/mediaQueries'
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

const Content = styled.div`
  max-width: calc(${(p) => p.theme.maxSectionWidth} / 2);
  text-align: justify;
`

const drawerContext = createContext()

const Drawer = ({ isVisible, handleClose, children }) => {
  const [isRendered, setRendered] = useState(false)
  const [isOpen, setOpen] = useState(false)

  const context = useMemo(
    () => ({
      handleClose,
    }),
    [handleClose],
  )

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
          <drawerContext.Provider value={context}>
            <Content data-autofocus>{children}</Content>
          </drawerContext.Provider>
        </Panel>
      </FocusOn>
    )
  )
}

Drawer.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

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

Drawer.Header = ({ children }) => {
  const ctx = useContext(drawerContext)
  if (!ctx) new Error('Use Drawer.Header as child of <Drawer>')

  return (
    <Header>
      <CloseButton onClick={ctx.handleClose}>
        <img
          src="images/close.svg"
          width="25"
          height="25"
          alt="Close icon."
          title="Close panel"
        />
      </CloseButton>
      {children}
    </Header>
  )
}

export default Drawer
