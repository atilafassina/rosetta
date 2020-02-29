/** @jsx jsx */
import { css, jsx } from '@emotion/core'

let postStyles = css`
  color: firebrick;
`

export default ({ children }) => <article css={postStyles}>{children}</article>
