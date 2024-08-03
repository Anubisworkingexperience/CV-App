import { Input, Form } from "./Components"
import '../styles/forms.css'
import { faChevronDown, faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"


function SocialLinks() {
  return (
    <div className="social-links" >
      <Input className='github' label='Github:'/>
      <Input className='linkedIn' label='LinkedIn:'/>
      <Input className='whatsapp' label='Whatsapp:'/>
      <Input className='telegram' label='Telegram:'/>
      <Input className='website' label='Website:'/>
    </div>
  )
}


export function PersonalInformation() {
  const [show, setShow] = useState(false);

  function handleShowSocialLinks() {
    setShow(prevShow => !prevShow);
  }

  return (
    <>
    <Form className='info' title='Personal information' icon={faUser} >
      <Input className='fullName' label='Full name'/>
      <Input className='jobTitle' label='Job title'/>
      <div className="summary">
        <strong><label key='summary' htmlFor='summary'>Professional summary</label></strong>
        <textarea id="summary" name="summary" rows={5} cols={40}></textarea>
      </div>
      <Input className='email' label='Email'/>
      <Input className='phone' label='Phone number'/>
      <Input className='location' label='Location'/>
      <div className="show-social">
        <div className="show-social-container">
          <div className="show-social-open" onClick={handleShowSocialLinks}>
            <div className="show-social-text">{show ? 'Hide social links' : 'Show social links'}</div>
            <FontAwesomeIcon icon={show ? faChevronDown : faChevronUp} className="show-social-icon"/>
          </div>
        {show && <SocialLinks />}
        </div>
      </div> 
    </Form>
    </>
  )
}

