import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { AuthContextProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
)
