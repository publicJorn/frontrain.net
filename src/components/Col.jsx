import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

const defaultBreakpoints = {
  xs: 0, // mobile
  sm: 576, // mobile landscape
  md: 768, // tablets
  lg: 992, // Wide
}

const Col = ({ theme, width, children, ...props }) => {
  if (!theme.breakpoints) {
    console.warn('`theme.breakpoints` not found. Using default values.')
  }

  const breakpoints = theme.breakpoints || defaultBreakpoints
  let colWidth

  const widthStyles = Object.values(breakpoints).map((minWidth, i) => {
    if (width[i]) colWidth = width[i]
    return `@media (min-width: ${minWidth}px){ width: ${colWidth * 100}%; }`
  })

  const colCss = `
    padding: 0 1rem;
    ${widthStyles.join('\n')}
  `

  return (
    <div {...props} css={colCss}>
      {children}
    </div>
  )
}

Col.propTypes = {
  width: PropTypes.arrayOf(PropTypes.number).isRequired,
}

Col.defaultProps = {
  width: [1],
}

export default withTheme(Col)
