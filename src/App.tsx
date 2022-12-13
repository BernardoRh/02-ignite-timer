import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'

import { defaultTheme } from './Styles/Themes/Default'
import { GlobalStyle } from './Styles/Global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <Router />
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
