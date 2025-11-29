import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './pages/layouts/Layout.jsx'
import { Visitas } from './pages/Visitas.jsx'
import { Welcome } from './pages/Welcome.jsx'
import { App } from './App.jsx'
import './assets/styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
