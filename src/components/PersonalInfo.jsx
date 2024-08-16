import { Input, Form, FormInputsContent } from "./Components"
import '../styles/forms.css'
import { faChevronDown, faChevronUp, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import { ContactInfo } from "./Preview"


function SocialLinks({onChange, showGithub, showLinkedIn, showWhatsapp, 
showTelegram, showWebsite, setShowGithub, setShowLinkedIn, setShowWhatsapp,
setShowTelegram, setShowWebsite}) {
  // const [showGithub, setShowGithub] = useState(true);
  // const [showLinkedIn, setShowLinkedIn] = useState(true);
  // const [showWhatsapp, setShowWhatsapp] = useState(true);
  // const [showTelegram, setShowTelegram] = useState(true);
  // const [showWebsite, setShowWebsite] = useState(true);

  function handleShowSocials(social) {
    switch(social) {
      case 'github':
        setShowGithub(prev => !prev);
        break;
      case 'linkedIn':
        setShowLinkedIn(prev => !prev);
        break;
      case 'whatsapp':
        setShowWhatsapp(prev => !prev);
        break;
      case 'telegram':
        setShowTelegram(prev => !prev);
        break;
      case 'website':
        setShowWebsite(prev => !prev);
        break;
    }
  }

  return (
    <div className="social-links" >
      <div className="github-container">
        <FontAwesomeIcon icon={showGithub ? faEyeSlash : faEye} className="github-show"
         onClick={() => handleShowSocials('github')}/>
        <Input className='github' label='Github:' onChange={onChange} name='github' />
      </div>
      <div className="linkedIn-container">
        <FontAwesomeIcon icon={showLinkedIn ? faEyeSlash : faEye} className="linkedIn-show"
        onClick={() => handleShowSocials('linkedIn')}/>
        <Input className='linkedIn' label='LinkedIn:' onChange={onChange} name='linkedIn'/>
      </div>
      <div className="whatsapp-container">
        <FontAwesomeIcon icon={showWhatsapp ? faEyeSlash : faEye} className="whatsapp-show"
        onClick={() => handleShowSocials('whatsapp')}/>
        <Input className='whatsapp' label='Whatsapp:' onChange={onChange} name='whatsApp'/>
      </div>
      <div className="telegram-container">
        <FontAwesomeIcon icon={showTelegram ? faEyeSlash : faEye} className="telegram-show"
        onClick={() => handleShowSocials('telegram')}/>
        <Input className='telegram' label='Telegram:' onChange={onChange} name='telegram'/>
      </div>
      <div className="website-container">
        <FontAwesomeIcon icon={showWebsite ? faEyeSlash : faEye} className="website-show"
        onClick={() => handleShowSocials('website')}/>
        <Input className='website' label='Website:' onChange={onChange} name='website'/>
      </div>
    </div>
  )
}


export function PersonalInformation({person, setPerson, showGithub, showLinkedIn
,showWhatsapp, showTelegram, showWebsite, setShowGithub, setShowLinkedIn
,setShowWhatsapp, setShowTelegram, setShowWebsite}) {
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
        {show && <SocialLinks onChange={handleInputChange} showGithub={showGithub}
        showLinkedIn={showLinkedIn} showWhatsapp={showWhatsapp} showTelegram={showTelegram}
        showWebsite={showWebsite} setShowGithub={setShowGithub} setShowLinkedIn={setShowLinkedIn}
        setShowWhatsapp={setShowWhatsapp} setShowTelegram={setShowTelegram} setShowWebsite={setShowWebsite}
        />}
        </div>
      </div> 
    </Form>
    </>
  )
}

