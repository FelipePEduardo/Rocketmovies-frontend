import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { MoviePreview } from './pages/MoviePreview'
import { Profile } from './pages/Profile'
import { CreateMovie } from './pages/CreateMovie'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CreateMovie />
    </ThemeProvider>
  )
}
