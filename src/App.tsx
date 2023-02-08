import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'

import { defaultTheme } from './Styles/Themes/Default'
import { GlobalStyle } from './Styles/Global'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { CentralizePageContent } from './AppStyles'

export function App() {
  return (
    <CentralizePageContent>
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <HashRouter>
            <Router />
          </HashRouter>
        </CyclesContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </CentralizePageContent>
  )
}
