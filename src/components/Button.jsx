import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 0 0.5rem;
  background: none;

  &:focus {
    border-color: ${(p) => p.theme.colors.focus};
    outline: none;
  }

  & > img {
    display: block;
  }
`

const Button = ({ children, ...props }) => (
  <StyledButton type="button" {...props}>
    {children}
  </StyledButton>
)

export default Button
