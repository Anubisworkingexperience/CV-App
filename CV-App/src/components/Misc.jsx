import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import '../styles/misc.css'

export function Input({className, label}) {
  return (
    <div className={className}>
      <strong><label key={className} htmlFor={className}>{label}</label></strong>
      <input type="text" id={className}/>
    </div>
  )
}

export function Logo() {
  return (
    <div className="logo">
      <FontAwesomeIcon icon={faScrewdriverWrench}/>
      <div>CV Builder</div>
    </div>
  )
}
