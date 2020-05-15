import { Field, ErrorMessage } from 'formik'
import styled, { css } from 'styled-components'

import ErrorIcon from './error.svg'

const fieldStyles = css`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${(p) => p.theme.colors.fieldBorder};
  margin-top: 0.5rem;
  font-size: 0.95rem;

  &::placeholder {
    font-size: 0.75rem;
    color: ${(p) => p.theme.colors.textInactive};
  }
`

export const Input = styled(Field)`
  ${fieldStyles};
`

export const Textarea = styled.textarea`
  ${fieldStyles};
  height: 106px;
`

export const Error = styled(ErrorMessage)`
  padding-left: 1.5rem;
  font-size: 0.8rem;
  color: ${(p) => p.theme.colors.error};
  background: url(${ErrorIcon}) no-repeat 0 1px;
`

export const Success = styled.p`
  color: ${(p) => p.theme.colors.brand};
`

export const Failure = styled.p`
  color: ${(p) => p.theme.colos.error};
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
`

export const Counter = styled.span`
  color: ${(p) => p.theme.colors.fieldBorder};
`
