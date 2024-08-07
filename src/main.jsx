import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Logo, FormInputsContent, ClearButton } from './components/Components.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Logo />
    <FormInputsContent />
  </React.StrictMode>,
)
