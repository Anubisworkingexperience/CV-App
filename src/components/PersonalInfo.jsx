import { Input, Form } from "./Misc"
import '../styles/forms.css'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"

function SocialLinks() {
  return (
    <div className="social-links">
      <Input className='github' label='Github:'/>
      <Input className='linkedIn' label='LinkedIn:'/>
      <Input className='whatsapp' label='Whatsapp:'/>
      <Input className='telegram' label='Telegram:'/>
      <Input className='website' label='Website:'/>
    </div>
  )
}


export function PersonalInformation() {
  // [show, setShow] = useState(false);

  // function handleShowSocialLinks() {
    
  // }

  return (
    <>
    <Form className='info' title='Personal information'>
      <Input className='fullName' label='Full name'/>
      <Input className='jobTitle' label='Job title'/>
      <Input className='email' label='Email'/>
      <Input className='phone' label='Phone number'/>
      <Input className='location' label='Location'/>
      <div className="show-social">
        <div className="show-social-text">Show social links</div>
        <FontAwesomeIcon icon={faChevronDown} className="show-social-icon" />
      </div> 
      <SocialLinks />
    </Form>
    </>
  )
}

