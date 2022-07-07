import styled from 'styled-components'
import { Box } from './common'

export const TransformBox = styled(Box)<{
  transform?: string
  hover?: string
}>`
  ${(props) => (props.transform ? `transform: ${props.transform};` : '')}

  ${(props) =>
    props.hover
      ? `&:hover {
        transform: ${props.hover};
        cursor: pointer;
    }`
      : ''}
`
