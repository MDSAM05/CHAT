import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css' 
import { AuthContextProvider } from './context/AuthContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
<AuthContextProvider>
  <App />
</AuthContextProvider>

  </BrowserRouter>
)
