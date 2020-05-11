import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const H2 = styled.h2`
  position: relative;
  display: inline-block;
`

const TitleHex = styled.div`
  position: absolute;
  top: -10px;
  left: -14px;
  z-index: -1;
  width: 48px;
  height: 27.71px;
  margin: 13.86px 0;
  border-left: solid 5px ${(p) => p.theme.colors.brandLightBorder};
  border-right: solid 5px ${(p) => p.theme.colors.brandLightBorder};
  background-color: ${(p) => p.theme.colors.brandLight};

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 2.0294px;
    z-index: 1;
    width: 33.94px;
    height: 33.94px;
    background-color: inherit;
    transform: scaleY(0.5774) rotate(-45deg);
  }

  &:before {
    top: -16.9706px;
    border-top: solid 7.0711px ${(p) => p.theme.colors.brandLightBorder};
    border-right: solid 7.0711px ${(p) => p.theme.colors.brandLightBorder};
  }

  &:after {
    bottom: -16.9706px;
    border-bottom: solid 7.0711px ${(p) => p.theme.colors.brandLightBorder};
    border-left: solid 7.0711px ${(p) => p.theme.colors.brandLightBorder};
  }

  transform: rotate(0);
  transition: transform 220ms ease-in-out;
  h2:hover > & {
    transform: rotate(0.75turn);
  }
`

const SectionTitle = ({ children, ...props }) => (
  <H2 {...props}>
    <TitleHex />
    {children}
  </H2>
)

SectionTitle.propTypes = {
  children: PropTypes.node,
}

export default SectionTitle
