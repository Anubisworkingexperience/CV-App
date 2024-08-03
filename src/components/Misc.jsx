import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
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
      <FontAwesomeIcon icon={icon}/>
        <h1>{title}</h1>
      <FontAwesomeIcon icon={showFormIcon}/>
    </div>
      {children}
    </form>
    </>
  )
}

export function ShowContent({contentContainer, content}) {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(prevShow => !prevShow);
  }
  return (
    <>
    <contentContainer>{show && content}</contentContainer>
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