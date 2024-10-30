import { StrictMode } from 'react'
import { ThemeProvider } from './components/Theme/ThemeContext.jsx'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)