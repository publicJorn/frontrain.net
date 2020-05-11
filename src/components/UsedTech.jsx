import React from 'react'
import styled from 'styled-components'

const Tech = styled.p`
  margin-bottom: 2rem;
  font-size: 0.875rem;
  font-style: italic;
`

const UsedTech = ({ children }) => <Tech>{children}</Tech>

export default UsedTech
