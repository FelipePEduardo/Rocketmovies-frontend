import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { MoviePreview } from './pages/MoviePreview'
import { Profile } from './pages/Profile'
import { CreateMovie } from './pages/CreateMovie'
import { Home } from './pages/Home'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/createMovie",
    element: <CreateMovie />
  },
  {
    path: "/moviePreview",
    element: <MoviePreview />
  }
])

const authRoutes = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
  {
    path: "/register",
    element: <SignUp />
  },
])

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <RouterProvider router={authRoutes}/>
    </ThemeProvider>
  )
}
