import { Input, Form, FormInputsContent } from "./Components"
import '../styles/forms.css'
import { faChevronDown, faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"


function SocialLinks({onChange}) {
  return (
    <div className="social-links" >
      <Input className='github' label='Github:' onChange={onChange} name='github'/>
      <Input className='linkedIn' label='LinkedIn:' onChange={onChange} name='linkedIn'/>
      <Input className='whatsapp' label='Whatsapp:' onChange={onChange} name='whatsApp'/>
      <Input className='telegram' label='Telegram:' onChange={onChange} name='telegram'/>
      <Input className='website' label='Website:' onChange={onChange} name='website'/>
    </div>
  )
}


export function PersonalInformation({person, setPerson}) {
  const [show, setShow] = useState(false);

  function handleShowSocialLinks() {
    setShow(prevShow => !prevShow);
  }

  function handleInputChange(e) {
    const {name, value} = e.target;
    setPerson({
      ...person,
      [name]: value
    });
  }

  return (
    <>
    <Form className='info' title='Personal information' icon={faUser} >
      <Input className='fullName' label='Full name' name='fullName' onChange={handleInputChange} />
      <Input className='jobTitle' name='jobTitle' onChange={handleInputChange} label='Job title'/>
      <div className="summary">
        <strong><label key='summary' htmlFor='summary'>Professional summary</label></strong>
        <textarea id="summary" name="summary" onChange={handleInputChange} rows={5} cols={40} ></textarea>
      </div>
      <Input className='email' label='Email' name='email' onChange={handleInputChange}/>
      <Input className='phone' label='Phone number' name='phone' onChange={handleInputChange}/>
      <Input className='location' label='Location' name='location' onChange={handleInputChange}/>
      <div className="show-social">
        <div className="show-social-container">
          <div className="show-social-open" onClick={handleShowSocialLinks}>
          <FontAwesomeIcon icon={show ? faChevronDown : faChevronUp} className="show-social-icon"/>
            <div className="show-social-text">{show ? 'Hide social links' : 'Show social links'}</div>
          </div>
        {show && <SocialLinks onChange={handleInputChange}/>}
        </div>
      </div> 
    </Form>
    </>
  )
}

