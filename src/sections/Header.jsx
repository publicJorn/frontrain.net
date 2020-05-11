import React from 'react'
import styled from 'styled-components'

import Frontrain from 'components/Frontrain'

const Header = styled.header`
  text-align: center;

  & .title {
    margin: 1rem 0;
    font-size: 1.8rem;
    font-weight: bold;
    color: ${(p) => p.theme.colors.brand};
  }

  & .tagline {
    padding: 1rem;
    font-size: 0.8rem;
    background-color: ${(p) => p.theme.colors.brandLight};
  }

  @media (min-width: 420px) {
    & .tagline {
      padding: 1rem 3rem;
    }
  }

  @media (min-width: 600px) {
    & .title {
      margin: 2rem 0;
      font-size: 3.5rem;
    }

    & .tagline {
      padding: 1rem;
      font-size: 0.9rem;
    }
  }

  & .jorn {
    white-space: nowrap;
  }
`

export default () => (
  <Header>
    <Frontrain as="h1" className="title" />
    <p className="tagline">
      Freelance frontend web- en mobile app development door{' '}
      <span className="jorn">Jorn Luiten</span>
    </p>
  </Header>
)
