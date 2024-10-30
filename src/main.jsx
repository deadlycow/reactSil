import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/Theme/ThemeContext.jsx'
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)