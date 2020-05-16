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

import {
  transitionDuration,
  Backdrop,
  Panel,
  Header,
  CloseButton,
} from './drawer.styles'

const Content = styled.div`
  max-width: calc(${(p) => p.theme.maxSectionWidth} / 2);
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
