/**
 * ℹ️ RHL must be imported before React/DOM for some setup magic, note during
 * development react-dom is aliased to @hot-loader/react-dom in webpack configs
 */
import 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider as EmotionTheme } from 'emotion-theming'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'
import { Theme as ComponentryTheme, Media, setupOutlineHandlers } from 'componentry'

// ⚠️ Side effects imports, note styles must be imported before components to
// ensure component styles can override them
import './index.scss'
import './utils/require-icons'

import App from './components/App/App'
import { components } from './components/App/mdx-components'
import { componentryTheme } from './theme/componentry'
import { emotionTheme } from './theme/emotion'

/* global process */
// Injects SVG symbol sprite into document from local storage if it exists,
// otherwise fetch, cache in local storage and inject.
svgSymbolSpriteLoader({ useCache: process.env.NODE_ENV === 'production' })

// Smartly show outlines for keyboard users and suppress for mouse users
setupOutlineHandlers()

// Start the party 🎉
// Render all of the root application providers then application root component
render(
  <React.StrictMode>
    <MDXProvider components={components}>
      <ComponentryTheme theme={componentryTheme}>
        <EmotionTheme theme={emotionTheme}>
          <Media>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Media>
        </EmotionTheme>
      </ComponentryTheme>
    </MDXProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
