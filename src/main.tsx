
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerSW } from 'virtual:pwa-register'
import './swListener.js';
import './versionCheck.js'

/*
registerSW({
  onNeedRefresh() {
    // Ladda om sidan direkt när ny version upptäcks
    window.location.reload()
  },
  immediate: true, // starta direkt
})*/

registerSW({
  immediate: true, // aktivera direkt
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
