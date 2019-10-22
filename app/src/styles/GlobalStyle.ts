import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: '游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  * {
    box-sizing: border-box;
  }
`
