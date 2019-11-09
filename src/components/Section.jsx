import styled from 'styled-components'
import mq from 'theme/mediaQueries'

export default styled.section`
  margin: 1rem auto;
  padding: 0 1rem;
  max-width: 960px;
  text-align: justify;

  ${mq.md`
    & {
      padding: 0 2rem;
    }
  `}

  ${mq.lg`
    & {
      margin: 2rem auto;
    }
  `}
`
