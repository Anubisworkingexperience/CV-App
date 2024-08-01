import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Logo } from './components/Misc.jsx'
import { PersonalInformation} from './components/PersonalInfo.jsx'
import { EducationInformation } from './components/Education.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Logo />
    <PersonalInformation />
    {/* <EducationForm /> */}
  </React.StrictMode>,
)
