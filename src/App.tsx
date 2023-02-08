import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'

import { defaultTheme } from './Styles/Themes/Default'
import { GlobalStyle } from './Styles/Global'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
