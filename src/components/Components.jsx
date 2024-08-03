import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { faScrewdriverWrench, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/misc.css'
import { useState } from 'react'

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

export function Form({className, children, title, icon, showFormIcon}) {
  return (
    <>
    <form className={className}>
    <div className="formTitle">
      {icon !== undefined && <FontAwesomeIcon icon={icon}/>}
        <h1>{title}</h1>
      {showFormIcon !== undefined && <FontAwesomeIcon icon={showFormIcon}/>}
    </div>
      {children}
    </form>
    </>
  )
}

export function Button({text, className}) {
  return (
    <>
    <button className={className}>{text}</button>
    </>
  )
}

export function ShowContent({className, contentComponent: ContentComponent, label}) {
  const [show, setShow] = useState(false);

  function handleShowContent() {
    setShow(prevShow => !prevShow);
  }

  return (
    <div className={`${className}-container`}>
      <div className={className} onClick={handleShowContent} >
        <FontAwesomeIcon icon={show ? faChevronDown : faChevronUp} className={`${className}-icon`} />
        <h1>{show ? `Hide ${label}` : `Show ${label}`}</h1>
      </div>
      {show && <ContentComponent />}
    </div>
  )
}