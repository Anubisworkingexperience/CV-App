import '../styles/preview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp, faTelegram} from '@fortawesome/free-brands-svg-icons'
import { faLink} from '@fortawesome/free-solid-svg-icons'
import { EducationComponent } from './Education'

export function PreviewComponent({person, show, separators, educationCounter, pdfRef,
showGithub, showLinkedIn, showTelegram, showWhatsapp, showWebsite}) {
  return (
    <section className="preview-content" ref={pdfRef}>
      <ContactInfo person={person} show={show} separators={separators}
      educationCounter={educationCounter} showGithub={showGithub} showLinkedIn={showLinkedIn}
      showWhatsapp={showWhatsapp} showTelegram={showTelegram} showWebsite={showWebsite}/>
      <PreviewInfo person={person} show={show} separators={separators} />
    </section>
  )
}

export function PreviewInfo({person, show, separators}) {
  return (
    <div className="preview-info" >
    <h1>{person.fullName}</h1>
    <h2>{person.jobTitle}</h2>
    <div>{person.summary}</div>
    <h2 className='preview-experience-title'>Experience</h2>
    <hr />
    <div>{person.startDateWork} {separators.hyphen} {person.endDateWork}{separators.comma} {person.workLocation}</div>
    <strong>{person.company}</strong>
    <br />
    <strong>{person.position}</strong>
    <div>{person.description}</div>
  </div>
  )
}
  

export function ContactInfo({person, separators, showGithub, showLinkedIn,
showWhatsapp, showTelegram, showWebsite, educationCounter}) {
  return (
    <div className="contact-info">
        <>
        <h1>Contact</h1>
        <hr />
        <div className="contact-phone">
          <h2>Phone</h2>
          <div>{person.phone}</div>
        </div>
        <div className="contact-email">
          <h2>Email</h2>
          <div>{person.email}</div>
        </div>
        <div className="contact-location">
          <h2>Location</h2>
          <div>{person.location}</div>
        </div>
        <div className="contact-social-links">
          {showGithub && <div className="github brands">
          <FontAwesomeIcon icon={faGithub} />
          <div>{person.github}</div>
          </div>}
          {showLinkedIn &&<div className="linkedIn brands">
          <FontAwesomeIcon icon={faLinkedin} />
            <div>{person.linkedIn}</div>
          </div>}
          {showWhatsapp && <div className="whatsApp brands">
          <FontAwesomeIcon icon={faWhatsapp} />
            <div>{person.whatsApp}</div>
          </div>}
          {showTelegram && <div className="telegram brands">
          <FontAwesomeIcon icon={faTelegram} />
            <div>{person.telegram}</div>
          </div>}
          {showWebsite && <div className="website brands">
          <FontAwesomeIcon icon={faLink} />
            <div>{person.website}</div>
          </div>}
        </div>
        <h1 className='contact-education-title'>Education</h1>
        <hr />
        <div className="contact-education">
          {Array.from({length: educationCounter}).map( (_, index) => (
            <div key={`education-${index}`}>
            <div>{person.startDateCollege} {separators.hyphen} {person.endDateCollege}</div>
            <h2>{person.degree}</h2>
            <div>{person.college}</div>
            <div>{person.collegeLocation}</div>
            </div>
            ))}  
        </div>
        </>
      </div>
  )
}