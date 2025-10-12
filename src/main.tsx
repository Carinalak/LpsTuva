
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerSW } from 'virtual:pwa-register'


registerSW({
  onNeedRefresh() {
    // Ladda om sidan direkt när ny version upptäcks
    window.location.reload()
  },
  immediate: true, // starta direkt
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
