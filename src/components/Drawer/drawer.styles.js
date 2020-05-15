import styled from 'styled-components'

import mq from 'theme/mediaQueries'
import Button from 'components/Button'

export const transitionDuration = 300

export const Backdrop = styled.div`
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

export const Panel = styled.aside`
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

export const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`

export const CloseButton = styled(Button)`
  padding: 0;
  border: none;

  &:focus {
    outline: 1px solid ${(p) => p.theme.colors.focus};
  }
`
