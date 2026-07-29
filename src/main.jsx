import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

// Restore the real path after the GitHub Pages 404.html fallback redirect
const spaRedirect = sessionStorage.getItem('spa-redirect')
if (spaRedirect !== null) {
  sessionStorage.removeItem('spa-redirect')
  const target = import.meta.env.BASE_URL + spaRedirect
  if (target !== window.location.pathname + window.location.search + window.location.hash) {
    window.history.replaceState(null, '', target)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
