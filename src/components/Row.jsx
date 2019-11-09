import styled from 'styled-components'
import mq from 'theme/mediaQueries'

export default styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -1rem;

  ${mq.mdUp`
    & {
      flex-direction: row;
    } 
  `}
`
