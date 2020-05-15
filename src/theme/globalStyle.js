import { createGlobalStyle } from 'styled-components'
import mq from 'theme/mediaQueries'

import './normalize.css'

export default createGlobalStyle`
  /* ===== DEV ===== */
  body::before {
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    color: red;
  }

  ${mq.sm`
    body::before {
      content: 'SM';
    }
  `}
  ${mq.md`
    body::before {
      content: 'MD';
    }
  `}
  ${mq.lg`
    body::before {
      content: 'LG';
    }
  `}
  ${mq.xl`
    body::before {
      content: 'XL';
    }
  `}
  /* ===== END DEV ===== */

  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Titillium Web', sans-serif;
    font-size: 14pt;
    line-height: 1.8;
  }

  ${mq.mdUp`
    html {
      font-size: 15pt;
    }
  `}

  body {
    position: relative;
    min-width: 310px;
    color: ${(p) => p.theme.colors.text};
  }

  ::selection {
    background-color: ${(p) => p.theme.brandLight};
  }

  *:focus {
    outline: 1px solid ${(p) => p.theme.colors.focus};
  }

  h2 {
    font-family: 'Press Start 2P', monospace;
    font-size: 16.5pt;
  }

  h4 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin: 1rem 0;
  }

  a {
    font-family: monospace;
    font-size: 0.95rem;
    color: ${(p) => p.theme.colors.link};
  }

  img {
    max-width: 100%;
  }

`
