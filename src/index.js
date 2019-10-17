import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Theme as ComponentryTheme, Media, setupOutlineHandlers } from 'componentry'
import { ThemeProvider as EmotionTheme } from 'emotion-theming'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

import { componentryTheme } from './theme/componentry'
import { emotionTheme } from './theme/emotion'

// ⚠️ Import styles first to ensure lower specificity than component styles
import './index.scss'
import './utils/require-icons'

import App from './components/App/App'

// Injects SVG symbol sprite into document from local storage if it exists,
// otherwise fetch, cache in local storage and inject.
svgSymbolSpriteLoader({ useCache: process.env.NODE_ENV === 'production' })

// Smartly show outlines for keyboard users and suppress for mouse users
setupOutlineHandlers()

// Start the party 🎉
// Render all of the root application providers then application root component
render(
  <ComponentryTheme theme={componentryTheme}>
    <EmotionTheme theme={emotionTheme}>
      <Media>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Media>
    </EmotionTheme>
  </ComponentryTheme>,
  document.getElementById('root'),
)
