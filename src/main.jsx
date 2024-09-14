import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './Store.js'
import { deposit } from './features/Accounts/AccountSlice.js'

Store.dispatch(deposit(1000));
console.log(Store.getState())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
