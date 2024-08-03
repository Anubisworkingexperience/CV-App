import { Input, Form, Button } from "./Misc"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export function EducationInformation() {
  
  return (
    <>
      <Form className='education' title='Education' icon={faGraduationCap}>
        <Input className='college' label='College'/>
        <Input className='degree' label='Degree' />
        <div className="date">
          <Input className='startDate' label='Start date' />
          <Input className='endDate' label='End date' />
        </div>
        <Input className='educationLocation' label='Location' />
        <Button text='+ Education' className='add-education'/>
      </Form>
    </>
  )
}

export function ShowEducation() {
  const [show, setShow] = useState(false);

  function handleShowEducation() {
    setShow(prevShow => !prevShow);
  }

  return (
    <div className="show-education-container">
      <div className="show-education">
        <FontAwesomeIcon icon={show ? faChevronDown : faChevronUp} className="show-education-icon" onClick={handleShowEducation} />
        <h1>{show ? 'Hide education' : 'Show education'}</h1>
      </div>
      {show && <EducationInformation />}
    </div>
  )

}