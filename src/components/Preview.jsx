import '../styles/preview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp, faTelegram} from '@fortawesome/free-brands-svg-icons'
import { faLink} from '@fortawesome/free-solid-svg-icons'


export function PreviewComponent({person}) {
  return (
    <section className="preview-content">
      <div className="contact-info">
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
          <div className="github brands">
          <FontAwesomeIcon icon={faGithub} />
          <div>{person.github}</div>
          </div>
          <div className="linkedIn brands">
          <FontAwesomeIcon icon={faLinkedin} />
            <div>{person.linkedIn}</div>
          </div>
          <div className="whatsApp brands">
          <FontAwesomeIcon icon={faWhatsapp} />
            <div>{person.whatsApp}</div>
          </div>
          <div className="telegram brands">
          <FontAwesomeIcon icon={faTelegram} />
            <div>{person.telegram}</div>
          </div>
          <div className="website brands">
          <FontAwesomeIcon icon={faLink} />
            <div>{person.website}</div>
          </div>
        </div>
        <h1 className='contact-education-title'>Education</h1>
        <hr />
        <div className="contact-education">
            <div>{person.startDateCollege} - {person.endDateCollege}</div>
            <h2>{person.degree}</h2>
            <div>{person.college}</div>
            <div>{person.collegeLocation}</div>
        </div>
      </div>
      <div className="preview-info">
        <h1>{person.fullName}</h1>
        <h2>{person.jobTitle}</h2>
        <div>{person.summary}</div>
        <h2 className='preview-experience-title'>Experience</h2>
        <hr />
        <div>{person.startDateWork} - {person.endDateWork}, {person.workLocation}</div>
        <strong>{person.company}</strong>
        <br />
        <strong>{person.position}</strong>
        <div>{person.description}</div>
      </div>
    </section>
  )
}