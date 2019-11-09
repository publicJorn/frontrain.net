import styled from 'styled-components'
import mq from 'theme/mediaQueries'

export default styled.div`
  padding: 0 1rem;

  ${mq.md`
    &.col-sm-1 { width: calc(100% / 12); }
    &.col-sm-2 { width: calc(100% / 12 * 2); }
    &.col-sm-3 { width: calc(100% / 12 * 3); }
    &.col-sm-4 { width: calc(100% / 12 * 4); }
    &.col-sm-5 { width: calc(100% / 12 * 5); }
    &.col-sm-6 { width: calc(100% / 12 * 6); }
    &.col-sm-7 { width: calc(100% / 12 * 7); }
    &.col-sm-8 { width: calc(100% / 12 * 8); }
    &.col-sm-9 { width: calc(100% / 12 * 9); }
    &.col-sm-10 { width: calc(100% / 12 * 10); }
    &.col-sm-11 { width: calc(100% / 12 * 11); }
    &.col-sm-12 { width: 100%; }
  `}

  ${mq.lg`
    &.col-up-1 { width: calc(100% / 12); }
    &.col-up-2 { width: calc(100% / 12 * 2); }
    &.col-up-3 { width: calc(100% / 12 * 3); }
    &.col-up-4 { width: calc(100% / 12 * 4); }
    &.col-up-5 { width: calc(100% / 12 * 5); }
    &.col-up-6 { width: calc(100% / 12 * 6); }
    &.col-up-7 { width: calc(100% / 12 * 7); }
    &.col-up-8 { width: calc(100% / 12 * 8); }
    &.col-up-9 { width: calc(100% / 12 * 9); }
    &.col-up-10 { width: calc(100% / 12 * 10); }
    &.col-up-11 { width: calc(100% / 12 * 11); }
    &.col-sm-12 { width: 100%; }
  `}
`
