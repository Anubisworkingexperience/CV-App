import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Logo } from './components/Components.jsx'
import { PersonalInformation} from './components/PersonalInfo.jsx'
import { EducationComponent } from './components/Education.jsx'
import { ExperienceComponent } from './components/Experience.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Logo />
    <PersonalInformation />
    <EducationComponent />
    <ExperienceComponent />
  </React.StrictMode>,
)
