import { Input, Form, Button, ShowContent } from "./Components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export function EducationInformation({person, setPerson}) {

  function handleInputChange(e) {
    const {name, value} = e.target;
    setPerson({
      ...person,
      [name]: value
    });
  }

  return (
    <>
      <Form className='education' title='Education' icon={faGraduationCap}>
        <Input className='college' label='College' name='college' onChange={handleInputChange}/>
        <Input className='degree' label='Degree' name='degree' onChange={handleInputChange}/>
        <div className="date">
          <Input className='startDate' label='Start date' name='startDateCollege' onChange={handleInputChange} />
          <Input className='endDate' label='End date' name='endDateCollege' onChange={handleInputChange} />
        </div>
        <Input className='educationLocation' label='Location' name='collegeLocation' onChange={handleInputChange}/>
        <Button text='+ Education' className='add-education'/>
      </Form>
    </>
  )
}

export function EducationComponent({person, setPerson}) {
  return (
    <>
      <ShowContent className='show-education' contentComponent={<EducationInformation 
      person={person} setPerson={setPerson}/>} 
      label='Education'/>
    </>
  )
}
