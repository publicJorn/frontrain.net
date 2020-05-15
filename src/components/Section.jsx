import styled from 'styled-components'
import mq from 'theme/mediaQueries'

export default styled.section`
  margin: 1rem auto;
  padding: 0 1rem;
  max-width: ${(p) => p.theme.maxSectionWidth};
  /* text-align: justify; */

  ${mq.lgUp`
      margin: 3rem auto 2rem;
  `}

  /* Clear any floats */
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`
